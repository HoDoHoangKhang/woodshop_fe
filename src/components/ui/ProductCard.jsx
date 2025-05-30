import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ product, addToCart, showDiscount = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white rounded-sm overflow-hidden transition duration-300 border border-[#e6e6e6] relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Discount badge */}
            {showDiscount && product.discount && (
                <div className="absolute top-3 left-3 bg-[#cb9d51] text-white px-2 py-1 font-semibold z-10 text-sm">
                    -{product.discount}
                </div>
            )}

            {/* Product image with watermark */}
            <div className="relative bg-[#f9f9f9]">
                <Link to={`/product/${product.id}`}>
                    <div className="h-52 w-full flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>

                {/* Action buttons appear from bottom on hover */}
                <div
                    className={`absolute left-0 right-0 bottom-0 flex justify-center gap-0 transition-all duration-300 bg-white bg-opacity-0 ${
                        isHovered
                            ? "h-10 -translate-y-0 opacity-100"
                            : "h-0 translate-y-4 opacity-0"
                    }`}
                >
                    <button
                        onClick={() => addToCart(product)}
                        className="cursor-pointer w-10 h-10 bg-white flex items-center justify-center hover:bg-[#d89c4a] hover:text-white transition-colors"
                        title="Thêm vào giỏ hàng"
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
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </button>
                    <Link
                        to={`/product/${product.id}`}
                        className="cursor-pointer w-10 h-10 bg-white flex items-center justify-center hover:bg-[#d89c4a] hover:text-white transition-colors border-l border-r border-gray-100"
                        title="Xem chi tiết"
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
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </Link>
                    <button
                        onClick={() => {
                            addToCart(product);
                            // Thêm logic để chuyển đến trang thanh toán nếu cần
                        }}
                        className="cursor-pointer w-10 h-10 bg-white flex items-center justify-center hover:bg-[#d89c4a] hover:text-white transition-colors"
                        title="Mua ngay"
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
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Product details */}
            <div className="p-2 text-center">
                <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-800 text-base mb-1 truncate whitespace-nowrap overflow-hidden">
                        {product.title}
                    </h3>
                    {showDiscount && product.discountPrice ? (
                        <div className="flex justify-center items-center space-x-2">
                            <span className="font-bold text-[#cb9d51] text-base">
                                {product.discountPrice}đ
                            </span>
                            <span className="text-gray-500 line-through text-sm italic">
                                {product.originalPrice}đ
                            </span>
                        </div>
                    ) : (
                        <div className="font-bold text-[#cb9d51] text-base">
                            {product.price
                                ? product.price.toLocaleString()
                                : ""}
                            đ
                        </div>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
