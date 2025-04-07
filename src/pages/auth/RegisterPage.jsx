import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/auth/use-register";
import useToast from "../../hooks/useToast";

// Schema validation
const schema = z.object({
  fullName: z.string().min(1, "Họ tên không được bỏ trống"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});
export default function RegisterPage() {
  const { success, error } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const registerMutation = useRegister({
    mutationConfig: {
      onSuccess: () => {
        navigate("/login");
        success("Đăng ký thành công!");
      },
      onError: (error) => {
        error("Đăng ký thất bại, vui lòng thử lại!");
      },
    },
  });

  const onSubmit = (data) => {
    registerMutation.mutate({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      username: data.email,
      role: 2,
      confirmed: true,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md backdrop-blur-sm bg-opacity-50">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/STEM4GOOD_LOGO.png"
            alt="Logo"
            className="mb-2 max-w-[150px]"
          />
          <h1 className="text-2xl font-semibold text-amber-800">Đăng ký</h1>
          <p className="text-sm text-amber-600">
            Tạo tài khoản để khám phá đồ chơi gỗ!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Họ tên
            </label>
            <input
              type="text"
              {...register("fullName")}
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Nguyễn Văn A"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="email@domain.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-xl transition cursor-pointer "
          >
            Đăng ký
          </button>
        </form>

        <div className="flex justify-between mt-3 text-sm text-amber-700">
          <p>
            Đã có tài khoản?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-amber-900 font-medium hover:underline cursor-pointer"
            >
              Đăng nhập
            </button>
          </p>
        </div>

        <div className="mt-3 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-amber-700 hover:text-amber-900 underline text-sm cursor-pointer"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
