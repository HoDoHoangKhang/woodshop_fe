import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate, useParams } from "react-router-dom";
import useToast from "../../hooks/useToast";
import { useResetPassword } from "../../hooks/auth/use-reset-password";

// Schema validation với Zod
const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không khớp",
  });

const ResetPassword = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const { success, error } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const resetPasswordMutation = useResetPassword({
    mutationConfig: {
      onSuccess: () => {
        success("Đặt lại mật khẩu thành công!");
        navigate("/login");
      },
      onError: () => {
        error("Đã xảy ra lỗi. Vui lòng thử lại.");
      },
    },
  });

  const onSubmit = (data) => {
    resetPasswordMutation.mutate({
      code,
      password: data.password,
      passwordConfirmation: data.confirmPassword,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#302924] mb-2">
            Đặt lại mật khẩu
          </h1>
          <p className="text-[#9e9181]">
            Nhập mật khẩu mới để hoàn tất quá trình
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#302924] mb-1"
            >
              Mật khẩu mới
            </label>
            <input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu mới"
              {...register("password")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.password ? "border-red-500" : "border-[#e0e0e0]"
              } focus:outline-none focus:border-[#d89c4a] focus:ring-2 focus:ring-[#d89c4a]`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#302924] mb-1"
            >
              Xác nhận mật khẩu
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Xác nhận mật khẩu"
              {...register("confirmPassword")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.confirmPassword ? "border-red-500" : "border-[#e0e0e0]"
              } focus:outline-none focus:border-[#d89c4a] focus:ring-2 focus:ring-[#d89c4a]`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={resetPasswordMutation.isPending}
            className={`w-full bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-3 rounded-xl transition cursor-pointer ${
              resetPasswordMutation.isPending
                ? "opacity-70 cursor-not-allowed"
                : ""
            }`}
          >
            {resetPasswordMutation.isPending
              ? "Đang đặt lại..."
              : "Xác nhận đặt lại mật khẩu"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

