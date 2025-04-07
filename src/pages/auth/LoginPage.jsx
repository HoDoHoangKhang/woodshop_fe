import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/auth/use-login";
import useAuthentication from "../../stores/use-authentication";
import useToast from "../../hooks/useToast";

// Zod schema
const schema = z.object({
  identifier: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function LoginPage() {
  const { success, error } = useToast();
  const navigate = useNavigate();
  const { authenticate, isAuthenticated } = useAuthentication((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const loginMutation = useLogin({
    mutationConfig: {
      onSuccess: (data) => {
        success("Đăng nhập thành công!");
        navigate("/");
        authenticate(data.user);
      },
      onError: () => {
        error("Email hoặc mật khẩu sai!");
      },
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  if (isAuthenticated) return <Navigate to="/" replace />;
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 
      bg-[url('/images/background.jpg')] bg-cover bg-center"
    >
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md backdrop-blur-sm bg-opacity-50">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/STEM4GOOD_LOGO.png"
            alt="Logo"
            className="mb-2 max-w-[150px]"
          />
          <h1 className="text-2xl font-semibold text-amber-800">Đăng nhập</h1>
          <p className="text-sm text-amber-600">
            Chào mừng bạn đến với thế giới đồ chơi gỗ!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">
              Email
            </label>
            <input
              type="identifier"
              {...register("identifier")}
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="email@domain.com"
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier.message}
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-3 text-sm text-amber-700">
            <a
              href="/forgot-password"
              className="text-amber-900 font-medium hover:underline"
            >
              Quên mật khẩu?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-xl transition cursor-pointer"
          >
            Đăng nhập
          </button>
        </form>

        <div className="flex justify-between mt-3 text-sm text-amber-700">
          <p>
            Chưa có tài khoản?{" "}
            <a
              href="/register"
              className="text-amber-900 font-medium hover:underline"
            >
              Đăng ký ngay
            </a>
          </p>
        </div>

        <div className="mt-4 text-center">
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
