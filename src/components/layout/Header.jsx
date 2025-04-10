import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logoImage from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
import useAuthentication from "../../stores/use-authentication";
import Button from "../ui/Button";

//Icon
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuMail } from "react-icons/lu";

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
                              <FaFacebook />
                          </a>
                          <a href="#" className="flex items-center text-white">
                              <IoLogoYoutube />
                          </a>
                      </div>
                      <div className="flex items-center space-x-6">
                          <div className="flex items-center gap-0.5">
                              <FiPhone />
                              <span>Cửa Hàng: 0123 456 789</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                              <HiOutlineUserGroup />
                              <span>Đại Lý & Phân phối: 0987 654 321</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                              <LuMail />
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
                      <Link
                          to="/"
                          className="text-2xl font-bold text-[#d89c4a]"
                      >
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
