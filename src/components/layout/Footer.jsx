import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#333333] text-white mt-10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Chàng Trai Gỗ
                        </h3>
                        <p className="text-gray-400">
                            Đồ Chơi Gỗ Trẻ Em | An Toàn & Phát Triển Trí Tuệ
                        </p>
                        <div className="mt-4">
                            <p className="text-gray-400 mb-1">
                                DEWOOD COMPANY LIMITED
                            </p>
                            <p className="text-gray-400 mb-1">
                                MST: 0318763733
                            </p>
                            <p className="text-gray-400 mb-1">
                                Địa chỉ: 1 Đường Thạnh Lộc 31, Thạnh Lộc, Quận
                                12, Hồ Chí Minh
                            </p>
                            <p className="text-gray-400 mb-1">
                                Hotline: 0945 81 3878
                            </p>
                            <p className="text-gray-400 mb-1">
                                Đại Lý & Gia Công: 0969 400 402
                            </p>
                            <p className="text-gray-400">
                                Email: changtraigo@changtraigo.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Dịch vụ khách hàng
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/guide"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Hướng dẫn mua hàng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/payment"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Đặt hàng và thanh toán
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/shipping"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Giao và nhận hàng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/return-policy"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Chính sách đổi/trả hàng và hoàn tiền
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Chính sách bảo mật thông tin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/agents"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Danh sách đại lý toàn quốc
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/catalog"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Catalog Chàng Trai Gỗ
                                </Link>
                            </li>
                        </ul>
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
                                    to="/catalog"
                                    className="text-gray-400 hover:text-[#d89c4a]"
                                >
                                    Catalog
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
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://facebook.com"
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
                            <a
                                href="https://instagram.com"
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
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com"
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
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-[#d89c4a]">
                            Đăng ký nhận khuyến mãi
                        </h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="py-2 px-3 w-full text-gray-900 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#d89c4a]"
                            />
                            <button className="bg-[#d89c4a] hover:bg-[#b07a2e] text-white py-2 px-4 rounded-r-md">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <div className="flex justify-center mb-4">
                        <img
                            src="https://changtraigo.com/image/catalog/bct-50px.png"
                            alt="Bộ Công Thương"
                            className="h-8"
                        />
                    </div>
                    <p>
                        &copy; {new Date().getFullYear()} CORPORATION
                        CHANGTRAIGO. Tất cả các quyền được bảo lưu.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
