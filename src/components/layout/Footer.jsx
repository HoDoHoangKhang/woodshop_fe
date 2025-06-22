import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#333333] text-white mt-10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Stem For Good
                        </h3>
                        <p className="text-gray-400">
                            Sản phẩm giáo dục STEM | Phát triển tư duy và kỹ
                            năng
                        </p>
                        <div className="mt-4">
                            <p className="text-gray-400 mb-1">
                                STEN FOR GOOD
                            </p>
                            <p className="text-gray-400 mb-1">
                                Địa chỉ: Tòa nhà Viettel Complex 285 Cách Mạng
                                Tháng 8, P. 12, Q.10, Tp. Hồ Chí Minh, Việt Nam
                            </p>
                            <p className="text-gray-400">
                                Email: stem4goodvn@gmail.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Các bộ sưu tập
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Tất Cả Sản Phẩm
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Tin Tức
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Về Chúng Tôi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/social-responsibility"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Trách nhiệm xã hội
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Liên Hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Theo dõi chúng tôi
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/stem4good.trungfounder/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#d89c4a]"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <div className="flex justify-center">
                        <img
                            src="/logo.png"
                            alt="Good For Stem"
                            className="h-8"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
