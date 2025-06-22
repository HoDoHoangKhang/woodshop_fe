import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logoImage from "../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import useAuthentication from "../../stores/use-authentication";
import Button from "../ui/Button";
import useToast from "../../hooks/useToast";

//Icon
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { strapi } from "../../libs/strapi-sdk";

const Header = () => {
    const { isAuthenticated, logout } = useAuthentication((state) => state);
    const { totalItems } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
    const navigate = useNavigate();
    const { success } = useToast();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target)
            ) {
                setIsUserMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        logout();
        success("Đăng xuất thành công!");
        navigate("/login");
        strapi.removeToken();
        strapi.logout();
    };

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
                            <a
                                href="https://www.facebook.com/stem4good.trungfounder/"
                                className="flex items-center text-white"
                                target="_blank"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center gap-0.5">
                                <LuMail />
                                <span>stem4goodvn@gmail.com</span>
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
                                        SẢN PHẨM
                                    </Link>
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
                                <div className="relative" ref={userMenuRef}>
                                    <button
                                        onClick={() =>
                                            setIsUserMenuOpen(!isUserMenuOpen)
                                        }
                                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#3e342d] transition-colors"
                                    >
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
                                    </button>
                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-[#302924] rounded-md shadow-lg py-1 z-50">
                                            <Link
                                                to="/profile"
                                                className="flex items-center px-4 py-2 text-sm text-[#9e9181] hover:bg-[#3e342d] hover:text-[#d89c4a]"
                                            >
                                                <IoPersonOutline className="mr-2" />
                                                Thông tin cá nhân
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full px-4 py-2 text-sm text-[#9e9181] hover:bg-[#3e342d] hover:text-[#d89c4a]"
                                            >
                                                <IoLogOutOutline className="mr-2" />
                                                Đăng xuất
                                            </button>
                                        </div>
                                    )}
                                </div>
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
                            <button
                                className="md:hidden cursor-pointer"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                            >
                                {isMobileMenuOpen ? (
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
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                ) : (
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
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#302924] pb-4">
                    <nav>
                        <ul className="flex flex-col items-center space-y-4">
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    TRANG CHỦ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    SẢN PHẨM
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    BÀI VIẾT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    VỀ CHÚNG TÔI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/social-responsibility"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    TRÁCH NHIỆM XÃ HỘI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm text-[#9e9181] hover:text-[#d89c4a] cursor-pointer"
                                >
                                    LIÊN HỆ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
