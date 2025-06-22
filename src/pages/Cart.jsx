import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const {
        cartItems,
        totalItems,
        totalAmount,
        removeFromCart,
        updateQuantity,
        clearCart,
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <MainLayout>
                <div className="text-center py-12 bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold mb-4">
                        Giỏ hàng của bạn
                    </h1>
                    <div className="flex justify-center mb-6">
                        <svg
                            className="w-24 h-24 text-gray-300"
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
                    </div>
                    <p className="text-gray-500 mb-6">
                        Giỏ hàng của bạn đang trống.
                    </p>
                    <Button
                        as={Link}
                        to="/products"
                        className="bg-green-600 hover:bg-green-700"
                    >
                        Tiếp tục mua sắm
                    </Button>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container mx-auto py-8 px-4 md:px-8">
                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm">
                    <Link to="/" className="text-gray-500 hover:text-gray-700">
                        Trang chủ
                    </Link>
                    <span className="mx-2 text-gray-500">›</span>
                    <span className="text-gray-900">Giỏ hàng</span>
                </nav>

                <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-sm mb-4">
                            <div className="border-b px-6 py-4 flex justify-between items-center">
                                <span className="font-medium">
                                    Sản phẩm ({totalItems})
                                </span>
                                <button
                                    className="text-[#d89c4a] hover:text-[#c78f43] cursor-pointer"
                                    onClick={clearCart}
                                >
                                    Xóa tất cả
                                </button>
                            </div>

                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="px-6 py-4 border-b last:border-b-0"
                                >
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="sm:w-20 h-20 mb-4 sm:mb-0 flex-shrink-0 mx-auto sm:mx-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="sm:ml-4 flex-grow">
                                            <div className="flex flex-col sm:flex-row sm:justify-between">
                                                <Link
                                                    to={`/product/${item.id}`}
                                                    className="font-medium hover:text-green-600 truncate max-w-xs mb-2 sm:mb-0"
                                                >
                                                    {item.title}
                                                </Link>
                                                <div className="font-bold text-red-800">
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                    ₫
                                                </div>
                                            </div>

                                            <div className="text-gray-500 mb-2">
                                                {item.price.toFixed(2)}₫ / sản
                                                phẩm
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3">
                                                <div className="flex items-center mb-3 sm:mb-0">
                                                    <button
                                                        className="bg-[#d89c4a] text-white px-2 py-1 rounded-l hover:bg-[#c78f43] cursor-pointer"
                                                        onClick={() =>
                                                            item.quantity > 1 &&
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity -
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <span className="border-t border-b px-3 py-1">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        className="bg-[#d89c4a] text-white px-2 py-1 rounded-r hover:bg-[#c78f43] cursor-pointer"
                                                        onClick={() =>
                                                            updateQuantity(
                                                                item.id,
                                                                item.quantity +
                                                                    1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    className="text-[#d89c4a] hover:text-[#c78f43] flex items-center cursor-pointer"
                                                    onClick={() =>
                                                        removeFromCart(item.id)
                                                    }
                                                >
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        ></path>
                                                    </svg>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <Button as={Link} to="/products" variant="outline">
                                Tiếp tục mua sắm
                            </Button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold mb-4">
                                Tóm tắt đơn hàng
                            </h2>

                            <div className="border-b pb-4 mb-4">
                                <div className="flex justify-between mb-2">
                                    <span>Tạm tính:</span>
                                    <span>{totalAmount.toFixed(2)}₫</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Phí vận chuyển:</span>
                                    <span>0₫</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Mã giảm giá:</span>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Nhập mã giảm giá"
                                            className="border rounded-l px-2 py-1 text-sm w-32"
                                        />
                                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded-r text-sm cursor-pointer">
                                            Áp dụng
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between font-bold text-lg mb-6">
                                <span>Tổng cộng:</span>
                                <span className="text-red-800">
                                    {totalAmount.toFixed(2)}₫
                                </span>
                            </div>

                            <Button
                                fullWidth
                                as={Link}
                                to="/checkout"
                                className="bg-[#d89c4a] hover:bg-[#c78f43] text-white mb-3"
                            >
                                Tiến hành thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Cart;
