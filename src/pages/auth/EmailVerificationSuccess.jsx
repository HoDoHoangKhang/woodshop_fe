import { useNavigate } from "react-router-dom";

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#302924] mb-4">
          Xác nhận email thành công!
        </h1>

        <p className="text-[#9e9181] mb-8">
          Cảm ơn bạn đã xác nhận địa chỉ email của mình. Tài khoản của bạn đã
          được kích hoạt và sẵn sàng sử dụng.
        </p>

        <button
          onClick={handleGoToLogin}
          className="w-full bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-3 rounded-xl transition flex items-center justify-center space-x-2 mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <span>Tiến hành đăng nhập</span>
        </button>

        <p className="text-sm text-[#9e9181]">
          Bạn đã có thể đăng nhập và sử dụng tất cả các tính năng của chúng tôi.
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;

