import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logoImage from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
import useAuthentication from "../../stores/use-authentication";
import Button from "../ui/Button";

const Header = () => {
  const { isAuthenticated } = useAuthentication((state) => state);
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top header: Thông tin liên hệ */}
      <div
        className={`bg-[#d89c4a] text-white py-2 transition-all duration-300 hidden md:block text-xs ${
          isScrolled ? "md:hidden" : ""
        }`}
      >
        <div className="px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center text-white">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center text-white">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-5a4 4 0 0 1 4 4h-8a4 4 0 0 1 4-4z"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center text-white">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>Cửa Hàng: 0123 456 789</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span>Đại Lý & Phân phối: 0987 654 321</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>contact@goodforstem.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`bg-[#302924] border-b shadow-md transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#d89c4a]">
              <img
                src={logoImage}
                alt="Good For Stem"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 items-center">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a]"
                  >
                    TRANG CHỦ
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/products"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] flex items-center"
                  >
                    TẤT CẢ SẢN PHẨM
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-[#302924] shadow-lg rounded-md overflow-hidden z-20 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <Link
                      to="/category/do-choi-go"
                      className="block px-4 py-2 hover:bg-[#3e342d] text-xs text-[#9e9181] hover:text-[#d89c4a]"
                    >
                      Đồ chơi gỗ
                    </Link>
                    <Link
                      to="/category/phu-kien-van-phong"
                      className="block px-4 py-2 hover:bg-[#3e342d] text-xs text-[#9e9181] hover:text-[#d89c4a]"
                    >
                      Phụ kiện văn phòng
                    </Link>
                    <Link
                      to="/category/do-dung-gia-dung"
                      className="block px-4 py-2 hover:bg-[#3e342d] text-xs text-[#9e9181] hover:text-[#d89c4a]"
                    >
                      Đồ dùng gia dụng
                    </Link>
                    <Link
                      to="/category/khuyen-mai"
                      className="block px-4 py-2 hover:bg-[#3e342d] text-xs text-[#9e9181] hover:text-[#d89c4a]"
                    >
                      Khuyến mãi
                    </Link>
                  </div>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a]"
                  >
                    BÀI VIẾT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a]"
                  >
                    VỀ CHÚNG TÔI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/social-responsibility"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a]"
                  >
                    TRÁCH NHIỆM XÃ HỘI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-[#9e9181] hover:text-[#d89c4a]"
                  >
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="py-1 px-3 border border-[#3e342d] bg-[#3e342d] text-[#9e9181] rounded-md focus:outline-none focus:ring-1 focus:ring-[#d89c4a] focus:border-[#d89c4a] text-sm w-48"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-[#9e9181]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              {isAuthenticated ? (
                <svg
                  className="w-6 h-6 text-[#9e9181] hover:text-[#d89c4a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              ) : (
                <Button
                  size="sm"
                  variant="primary"
                  as={Link}
                  className="bg-[#d89c4a] hover:bg-[#b07a2e]"
                  to="/login"
                >
                  {" "}
                  Đăng nhập
                </Button>
              )}

              <Link to="/cart" className="relative">
                <svg
                  className="w-6 h-6 text-[#9e9181] hover:text-[#d89c4a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#d89c4a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button className="md:hidden">
                <svg
                  className="w-6 h-6 text-[#9e9181]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
