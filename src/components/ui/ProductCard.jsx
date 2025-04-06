import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ product, addToCart, showDiscount = false }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            {/* Discount badge - chỉ hiển thị nếu có showDiscount và product.discount */}
            {showDiscount && product.discount && (
                <div className="relative">
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{product.discount}
                    </span>
                </div>
            )}

            <Link to={`/product/${product.id}`}>
                <div className="p-4 h-48 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="p-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-1 text-sm h-10 overflow-hidden line-clamp-2">
                        {product.title}
                    </h3>
                    {showDiscount && product.discountPrice ? (
                        <div className="flex flex-col">
                            <span className="font-bold text-[#d89c4a]">
                                {product.discountPrice}₫
                            </span>
                            <span className="text-gray-500 line-through text-sm">
                                {product.originalPrice}₫
                            </span>
                        </div>
                    ) : (
                        <div className="font-bold text-[#d89c4a]">
                            {product.price.toFixed(2)}₫
                        </div>
                    )}
                </div>
            </Link>
            <div className="px-4 pb-4">
                <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => addToCart(product)}
                    className="bg-[#d89c4a] hover:bg-[#b07a2e]"
                >
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
