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
    const [activeImage, setActiveImage] = useState(0);
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

    // Hình ảnh sản phẩm
    const productImages = [
        { id: 1, src: product?.image, alt: product?.title },
        {
            id: 2,
            src: "https://www.changtraigo.com/image/cache/catalog/Combo%204%20xe%20c%C3%B4ng%20tr%C3%ACnh-1000x800.jpg",
            alt: "Hình chi tiết 1",
        },
        {
            id: 3,
            src: "https://www.changtraigo.com/image/cache/catalog/Wooden/Combo%20%C4%91%E1%BB%93%20ch%C6%A1i%20g%E1%BB%97%20cho%20b%C3%A9-1000x800.jpg",
            alt: "Hình chi tiết 2",
        },
        {
            id: 4,
            src: "https://www.changtraigo.com/image/cache/catalog/b%E1%BB%99%20router%20c%E1%BA%A7n%20tr%E1%BB%A5c-1000x800.jpg",
            alt: "Hình chi tiết 3",
        },
        {
            id: 5,
            src: "https://www.changtraigo.com/image/cache/catalog/Wooden/h%E1%BB%99p%20b%C3%BAt%20vi%E1%BA%BFt-1000x800.jpeg",
            alt: "Hình chi tiết 4",
        },
    ];

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
            <div className="container mx-auto px-4 py-8">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div>
                        <div className="border rounded-lg mb-4 overflow-hidden">
                            <img
                                src={productImages[activeImage].src}
                                alt={productImages[activeImage].alt}
                                className="w-full h-96 object-contain"
                            />
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {productImages.map((img, index) => (
                                <div
                                    key={img.id}
                                    className={`border rounded cursor-pointer ${
                                        index === activeImage
                                            ? "border-amber-500"
                                            : ""
                                    }`}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-16 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            COMBO 4 XE CÔNG TRÌNH - ĐỒ CHƠI GỖ TRẺ EM CHĂNG TRAI
                            GỖ
                        </h1>

                        <div className="flex items-center space-x-4 mb-4 text-sm">
                            <span className="text-gray-600">
                                Thương hiệu: Chăng Trai Gỗ
                            </span>
                            <span className="text-gray-600 pl-4 border-l border-gray-300">
                                Loại: ĐỒ CHƠI GỖ
                            </span>
                            <span className="text-gray-600 pl-4 border-l border-gray-300">
                                Mã SP: CTC81
                            </span>
                        </div>

                        <div className="flex items-end mb-4">
                            <span className="text-2xl font-bold text-amber-600 mr-3">
                                690,000₫
                            </span>
                            <span className="text-gray-500 line-through">
                                980,000₫
                            </span>
                            <span className="ml-3 text-sm text-gray-600">
                                (Bạn đã tiết kiệm được 290,000₫)
                            </span>
                        </div>

                        <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                            <li>Chất liệu: Gỗ tự nhiên dẻo mộc, mài tròn</li>
                            <li>
                                Sản phẩm công ty bán ra đều có chế độ bảo hành.
                                Khách hàng được kiểm chứng khi nhận hàng (bóc
                                hàng kiểm tra tại chỗ).
                            </li>
                            <li>Đổi trả linh hoạt khách không hài lòng</li>
                        </ul>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                            <p className="font-medium mb-2">
                                Miễn phí giao hàng toàn quốc đơn hàng &gt;
                                500.000₫
                            </p>
                            <p className="mb-1">
                                - Khu vực HCM: Từ 24h-48h ( Giao hỏa tốc 3h )
                            </p>
                            <p className="mb-3">
                                - Các khu vực còn lại: từ 2 - 4 ngày làm việc
                            </p>
                            <p className="mb-2">
                                Bảo hàng đổi trả miễn phí nếu hàng lỗi do sản
                                xuất
                            </p>
                            <p className="mb-3">
                                Được kiểm tra trước khi nhận hàng
                            </p>

                            <p className="text-blue-600 font-semibold">
                                CHƯƠNG TRÌNH KHUYẾN MÃI
                            </p>
                            <p className="mb-1">
                                Hóa đơn &gt; 780k: Nhập mã{" "}
                                <span className="font-semibold">C50</span> giảm
                                50k
                            </p>
                            <p className="mb-2">
                                Hóa đơn &gt; 1500k: Nhập mã{" "}
                                <span className="font-semibold">C100</span> Giảm
                                100k
                            </p>
                            <p>Hotline cửa hàng: 0945 818878</p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center mb-6 text-sm">
                                <p className="mr-4 font-medium">Hotline</p>
                                <p className="mr-6">Cửa Hàng: 0945 81 3878</p>
                                <p>Đại Lý & Gia Công: 0969 400 402</p>
                            </div>

                            <div className="mb-4">
                                <p className="mb-2 font-medium">Số lượng:</p>
                                <div className="flex items-center">
                                    <div className="flex border rounded overflow-hidden mr-2">
                                        <button
                                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 border-r"
                                            onClick={() =>
                                                quantity > 1 &&
                                                setQuantity(quantity - 1)
                                            }
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            className="w-12 text-center px-2 py-1"
                                        />
                                        <button
                                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 border-l"
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    className="px-4 py-1.5 bg-amber-100 text-amber-600 text-sm font-medium border border-amber-300 rounded hover:bg-amber-200"
                                    onClick={handleAddToCart}
                                >
                                    THÊM VÀO GIỎ HÀNG
                                </button>
                                <button className="px-4 py-1.5 bg-amber-600 text-white text-sm font-medium rounded hover:bg-amber-700">
                                    MUA NGAY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-12 mb-8">
                    <div className="border-b mb-6">
                        <ul className="flex flex-wrap -mb-px">
                            <li className="mr-2">
                                <button
                                    className={`inline-block p-4 border-b-2 ${
                                        activeTab === "description"
                                            ? "border-amber-600 text-amber-600"
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
                                            ? "border-amber-600 text-amber-600"
                                            : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                    }`}
                                    onClick={() =>
                                        setActiveTab("specifications")
                                    }
                                >
                                    Thông số kỹ thuật
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`inline-block p-4 border-b-2 ${
                                        activeTab === "reviews"
                                            ? "border-amber-600 text-amber-600"
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
                                    Combo 4 xe công trình gỗ là sản phẩm đồ chơi
                                    gỗ dành cho trẻ em, gồm 4 mẫu xe với các
                                    chức năng khác nhau:
                                </p>
                                <ul className="list-disc pl-5 mb-4">
                                    <li>Xe cẩu</li>
                                    <li>Xe ben</li>
                                    <li>Xe kéo</li>
                                    <li>Xe tải</li>
                                </ul>
                                <p className="mb-4">
                                    Sản phẩm được làm từ gỗ tự nhiên 100%, đã
                                    qua xử lý kỹ càng, an toàn cho trẻ em. Thiết
                                    kế tinh tế, màu sắc tươi sáng, kích thích sự
                                    phát triển trí tưởng tượng và sáng tạo của
                                    trẻ.
                                </p>
                                <p>
                                    Sản phẩm phù hợp với trẻ em trên 3 tuổi.
                                    Khuyến khích sự phát triển trí não và kỹ
                                    năng vận động tinh.
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
                                            <td className="py-2 px-4">
                                                Việt Nam
                                            </td>
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
                                            <td className="py-2 px-4">
                                                Màu gỗ tự nhiên
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 px-4 font-medium bg-gray-50">
                                                Bảo hành
                                            </td>
                                            <td className="py-2 px-4">
                                                7 ngày đổi trả
                                            </td>
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
                                            {product.rating?.count || "120"}{" "}
                                            đánh giá
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm w-16">
                                            5 sao
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div className="bg-yellow-500 h-2.5 rounded-full w-3/4"></div>
                                        </div>
                                        <span className="text-sm">75%</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm w-16">
                                            4 sao
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div className="bg-yellow-500 h-2.5 rounded-full w-1/5"></div>
                                        </div>
                                        <span className="text-sm">20%</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm w-16">
                                            3 sao
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div className="bg-yellow-500 h-2.5 rounded-full w-1/20"></div>
                                        </div>
                                        <span className="text-sm">5%</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm w-16">
                                            2 sao
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div className="bg-yellow-500 h-2.5 rounded-full w-0"></div>
                                        </div>
                                        <span className="text-sm">0%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-sm w-16">
                                            1 sao
                                        </span>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div className="bg-yellow-500 h-2.5 rounded-full w-0"></div>
                                        </div>
                                        <span className="text-sm">0%</span>
                                    </div>
                                </div>

                                <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">
                                    Viết đánh giá
                                </button>
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
                                            <div className="font-bold text-amber-600">
                                                {relatedProduct.price.toFixed(
                                                    2
                                                )}
                                                ₫
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="w-full px-4 py-2 bg-amber-100 text-amber-600 font-medium border border-amber-300 rounded hover:bg-amber-200"
                                            onClick={() =>
                                                addToCart(relatedProduct)
                                            }
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default ProductDetail;
