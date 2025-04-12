import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForgotPassword } from "../../hooks/auth/use-forgot-password";
import useToast from "../../hooks/useToast";

// Tạo schema validation bằng Zod
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email là bắt buộc" })
    .email({ message: "Email không hợp lệ" }),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { success, error } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const forgotPasswordMutation = useForgotPassword({
    mutationConfig: {
      onSuccess: () => {
        success("Đã gửi email đặt lại mật khẩu!");
      },
      onError: () => {
        error("Đã xảy ra lỗi khi gửi email đặt lại mật khẩu.");
      },
    },
  });

  const onSubmit = async (data) => {
    forgotPasswordMutation.mutate(data.email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#302924] mb-2">
            Quên mật khẩu?
          </h1>
          <p className="text-[#9e9181]">
            Nhập email của bạn và chúng tôi sẽ gửi link đặt lại mật khẩu
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#302924] mb-1"
            >
              Địa chỉ email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              {...register("email")}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-[#e0e0e0]"
              } focus:outline-none focus:border-[#d89c4a] focus:ring-2 focus:ring-[#d89c4a]`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={forgotPasswordMutation.isPending}
            className={`w-full bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-3 rounded-xl transition cursor-pointer ${
              forgotPasswordMutation.isPending
                ? "opacity-70 cursor-not-allowed"
                : ""
            }`}
          >
            {forgotPasswordMutation.isPending
              ? "Đang gửi..."
              : "Gửi link đặt lại mật khẩu"}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#9e9181] hover:text-[#d89c4a] transition"
            >
              Quay lại đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

