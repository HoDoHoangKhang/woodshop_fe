import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50
    bg-[url('/images/background.jpg')] bg-cover bg-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md backdrop-blur-sm bg-opacity-50">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/STEM4GOOD_LOGO.png"
            alt="Logo"
            className="mb-2 max-w-[150px]"
          />
          <h1 className="text-2xl font-semibold text-amber-800">Đăng ký</h1>
          <p className="text-sm text-amber-600">Tạo tài khoản để khám phá đồ chơi gỗ!</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">Họ tên</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="email@domain.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">Xác nhận mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl bg-amber-50 border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="••••••••"
            />
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
