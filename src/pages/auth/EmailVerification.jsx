import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const EmailVerification = () => {
  const params = new URLSearchParams(window.location.search);
  const email = params.get("email");
  const navigate = useNavigate();

  const openEmailClient = () => {
    window.open("https://mail.google.com", "_blank");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#d89c4a"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#302924] mb-2">
            Đăng ký thành công!
          </h1>
          <p className="text-[#9e9181] mb-2">
            Chúng tôi đã gửi một email xác nhận đến
          </p>
          <p className="font-semibold text-[#d89c4a] mb-4">{email}</p>
          <p className="text-[#9e9181] text-sm">
            Vui lòng kiểm tra hộp thư đến và nhấp vào liên kết xác nhận để hoàn
            tất quá trình đăng ký.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={openEmailClient}
            className="w-full bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-3 rounded-xl transition flex items-center justify-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>Mở Email</span>
          </button>
          <button
            onClick={goToLogin}
            className="w-full text-[#9e9181] hover:text-[#d89c4a] py-3 rounded-xl transition cursor-pointer"
          >
            Quay lại đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
