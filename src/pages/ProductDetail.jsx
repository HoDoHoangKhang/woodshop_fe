import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/ui/Button";
import { fetchProductById, fetchProducts } from "../services/api";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchProductById(id);
                setProduct(data);

                // Tải sản phẩm liên quan
                const allProducts = await fetchProducts();
                const filtered = allProducts
                    .filter(
                        (p) =>
                            p.id !== parseInt(id) &&
                            p.category === data.category
                    )
                    .slice(0, 4);
                setRelatedProducts(filtered);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
        }
    };

    if (isLoading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-64">
                    <p className="text-xl">Đang tải...</p>
                </div>
            </MainLayout>
        );
    }

    if (error || !product) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-64">
                    <p className="text-red-500">
                        Lỗi: {error || "Không tìm thấy sản phẩm"}
                    </p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            {/* Breadcrumb */}
            <nav className="flex mb-6 text-sm">
                <Link to="/" className="text-gray-500 hover:text-gray-700">
                    Trang chủ
                </Link>
                <span className="mx-2 text-gray-500">›</span>
                <Link
                    to="/products"
                    className="text-gray-500 hover:text-gray-700"
                >
                    Sản phẩm
                </Link>
                <span className="mx-2 text-gray-500">›</span>
                <span className="text-gray-900">{product.title}</span>
            </nav>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div>
                        <div className="bg-white rounded-lg border p-4 mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-80 object-contain mx-auto"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-2xl font-bold mb-4">
                            {product.title}
                        </h1>

                        <div className="border-t border-b py-4 mb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-medium w-32">
                                    Mã sản phẩm:
                                </span>
                                <span>SKU-{product.id}</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="font-medium w-32">
                                    Tình trạng:
                                </span>
                                <span className="text-green-600">Còn hàng</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-medium w-32">
                                    Danh mục:
                                </span>
                                <Link
                                    to={`/category/${product.category}`}
                                    className="text-blue-600 hover:underline capitalize"
                                >
                                    {product.category}
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="mb-2">
                                <span className="font-medium">Đánh giá: </span>
                                <span className="text-yellow-500">★★★★★</span>
                                <span className="text-gray-500 ml-1">
                                    ({product.rating?.count || "120"} đánh giá)
                                </span>
                            </div>

                            <div className="text-3xl font-bold text-red-600 mb-4">
                                {product.price.toFixed(2)}₫
                            </div>

                            <p className="text-gray-700 mb-6">
                                {product.description}
                            </p>
                        </div>

                        {/* Add to cart */}
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <span className="mr-4">Số lượng:</span>
                                <div className="flex border rounded overflow-hidden">
                                    <button
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                        onClick={() =>
                                            quantity > 1 &&
                                            setQuantity(quantity - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={handleQuantityChange}
                                        className="w-16 text-center border-x px-2 py-1"
                                    />
                                    <button
                                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={handleAddToCart}
                                    className="bg-green-600 hover:bg-green-700"
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                                <Button variant="outline" size="lg">
                                    Mua ngay
                                </Button>
                            </div>
                        </div>

                        {/* Share */}
                        <div className="flex items-center">
                            <span className="mr-4">Chia sẻ:</span>
                            <div className="flex space-x-2">
                                <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-400 hover:text-blue-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm17 0h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="border-b mb-6">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mr-2">
                            <button
                                className={`inline-block p-4 border-b-2 ${
                                    activeTab === "description"
                                        ? "border-green-600 text-green-600"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                                onClick={() => setActiveTab("description")}
                            >
                                Mô tả sản phẩm
                            </button>
                        </li>
                        <li className="mr-2">
                            <button
                                className={`inline-block p-4 border-b-2 ${
                                    activeTab === "specifications"
                                        ? "border-green-600 text-green-600"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                                onClick={() => setActiveTab("specifications")}
                            >
                                Thông số kỹ thuật
                            </button>
                        </li>
                        <li>
                            <button
                                className={`inline-block p-4 border-b-2 ${
                                    activeTab === "reviews"
                                        ? "border-green-600 text-green-600"
                                        : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                                onClick={() => setActiveTab("reviews")}
                            >
                                Đánh giá ({product.rating?.count || "120"})
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    {activeTab === "description" && (
                        <div className="prose max-w-none">
                            <h3 className="text-xl font-bold mb-4">
                                Chi tiết sản phẩm
                            </h3>
                            <p className="mb-4">{product.description}</p>
                            <p className="mb-4">
                                Sản phẩm được làm từ gỗ tự nhiên 100%, đã qua xử
                                lý kỹ càng, an toàn cho trẻ em. Thiết kế tinh
                                tế, màu sắc tươi sáng, kích thích sự phát triển
                                trí tưởng tượng và sáng tạo của trẻ.
                            </p>
                            <p>
                                Sản phẩm phù hợp với trẻ em trên 3 tuổi. Khuyến
                                khích sự phát triển trí não và kỹ năng vận động
                                tinh.
                            </p>
                        </div>
                    )}

                    {activeTab === "specifications" && (
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Thông số kỹ thuật
                            </h3>
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-2 px-4 font-medium bg-gray-50">
                                            Xuất xứ
                                        </td>
                                        <td className="py-2 px-4">Việt Nam</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-4 font-medium bg-gray-50">
                                            Chất liệu
                                        </td>
                                        <td className="py-2 px-4">
                                            Gỗ tự nhiên
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-4 font-medium bg-gray-50">
                                            Kích thước
                                        </td>
                                        <td className="py-2 px-4">
                                            Theo tiêu chuẩn
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-4 font-medium bg-gray-50">
                                            Độ tuổi phù hợp
                                        </td>
                                        <td className="py-2 px-4">
                                            3 tuổi trở lên
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-2 px-4 font-medium bg-gray-50">
                                            Màu sắc
                                        </td>
                                        <td className="py-2 px-4">Nhiều màu</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Đánh giá từ khách hàng
                            </h3>
                            <div className="flex items-center mb-6">
                                <div className="text-5xl font-bold mr-4">
                                    {product.rating?.rate || "4.8"}
                                </div>
                                <div>
                                    <div className="flex text-yellow-500 mb-1">
                                        <span>★★★★★</span>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Dựa trên{" "}
                                        {product.rating?.count || "120"} đánh
                                        giá
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <span className="text-sm w-16">5 sao</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
                                    </div>
                                    <span className="text-sm">75%</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-sm w-16">4 sao</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-1/5"></div>
                                    </div>
                                    <span className="text-sm">20%</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-sm w-16">3 sao</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-1/20"></div>
                                    </div>
                                    <span className="text-sm">5%</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-sm w-16">2 sao</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-0"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm w-16">1 sao</span>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                        <div className="bg-yellow-500 h-2.5 rounded-full w-0"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                className="bg-green-600 hover:bg-green-700"
                            >
                                Viết đánh giá
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">
                        Sản phẩm liên quan
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                            >
                                <Link to={`/product/${relatedProduct.id}`}>
                                    <div className="h-48 overflow-hidden p-4">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 mb-1 truncate">
                                            {relatedProduct.title}
                                        </h3>
                                        <div className="font-bold">
                                            {relatedProduct.price.toFixed(2)}₫
                                        </div>
                                    </div>
                                </Link>
                                <div className="px-4 pb-4">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        fullWidth
                                        onClick={() =>
                                            addToCart(relatedProduct)
                                        }
                                        className="bg-green-600 hover:bg-green-700"
                                    >
                                        Thêm vào giỏ hàng
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </MainLayout>
    );
};

export default ProductDetail;
