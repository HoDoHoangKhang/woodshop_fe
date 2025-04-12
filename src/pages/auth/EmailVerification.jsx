import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";

const EmailVerification = () => {
    const [verificationCode, setVerificationCode] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [email, setEmail] = useState("");
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const { success, error } = useToast();

    useEffect(() => {
        // Lấy email từ localStorage sau khi đăng ký
        const savedEmail = localStorage.getItem("pendingVerificationEmail");
        if (savedEmail) {
            setEmail(savedEmail);
        } else {
            navigate("/register");
        }
    }, [navigate]);

    const handleInputChange = (index, value) => {
        if (value.length > 1) {
            value = value.slice(0, 1);
        }

        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Tự động chuyển sang ô tiếp theo
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = () => {
        const code = verificationCode.join("");
        if (code.length !== 6) {
            error("Vui lòng nhập đủ 6 số xác nhận");
            return;
        }

        // TODO: Gọi API xác nhận mã
        console.log("Verifying code:", code);

        // Giả lập xác nhận thành công
        success("Xác nhận email thành công!");
        localStorage.removeItem("pendingVerificationEmail");
        navigate("/login");
    };

    const handleResendCode = () => {
        // TODO: Gọi API gửi lại mã
        success("Đã gửi lại mã xác nhận!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-[#302924] mb-2">
                        Xác nhận email
                    </h1>
                    <p className="text-[#9e9181]">
                        Chúng tôi đã gửi mã xác nhận đến email{" "}
                        <span className="font-semibold text-[#d89c4a]">
                            {email}
                        </span>
                    </p>
                </div>

                <div className="mb-8">
                    <div className="flex justify-center gap-2 mb-4">
                        {verificationCode.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) =>
                                    handleInputChange(index, e.target.value)
                                }
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-12 h-12 text-center text-xl border-2 border-[#e0e0e0] rounded-lg focus:outline-none focus:border-[#d89c4a] focus:ring-2 focus:ring-[#d89c4a]"
                            />
                        ))}
                    </div>
                    <p className="text-center text-sm text-[#9e9181]">
                        Vui lòng nhập mã 6 số đã được gửi đến email của bạn
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleVerify}
                        className="w-full bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-3 rounded-xl transition cursor-pointer"
                    >
                        Xác nhận
                    </button>
                    <button
                        onClick={handleResendCode}
                        className="w-full text-[#d89c4a] hover:text-[#b07a2e] py-3 rounded-xl transition cursor-pointer"
                    >
                        Gửi lại mã
                    </button>
                    <button
                        onClick={() =>
                            window.open("https://mail.google.com", "_blank")
                        }
                        className="w-full text-[#9e9181] hover:text-[#d89c4a] py-3 rounded-xl transition cursor-pointer"
                    >
                        Mở Gmail
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;
