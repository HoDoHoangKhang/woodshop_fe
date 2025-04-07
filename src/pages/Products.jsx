import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { fetchProducts, fetchCategories } from "../services/api";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Pagination from "../components/common/Pagination";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Số sản phẩm trên mỗi trang
    const totalPages = 5; // Tổng số trang

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const [productsData, categoriesData] = await Promise.all([
                    fetchProducts(),
                    fetchCategories(),
                ]);

                setProducts(productsData);
                setCategories(["all", ...categoriesData]);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter(
                  (product) => product.category === selectedCategory
              );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Ở đây sẽ thêm logic để lấy dữ liệu từ API
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

    if (error) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-64">
                    <p className="text-red-500">Lỗi: {error}</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#302924] mb-8">
                    Tất Cả Sản Phẩm
                </h1>

                {/* Bộ lọc */}
                <div className="mb-8 flex flex-wrap gap-4">
                    <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option value="">Tất cả danh mục</option>
                        <option value="do-choi-go">Đồ chơi gỗ</option>
                        <option value="phu-kien-van-phong">
                            Phụ kiện văn phòng
                        </option>
                        <option value="do-dung-gia-dung">
                            Đồ dùng gia dụng
                        </option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-md">
                        <option value="">Sắp xếp theo</option>
                        <option value="price-asc">Giá tăng dần</option>
                        <option value="price-desc">Giá giảm dần</option>
                        <option value="name-asc">Tên A-Z</option>
                        <option value="name-desc">Tên Z-A</option>
                    </select>
                </div>

                {/* Grid sản phẩm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            <Link to={`/product/${product.id}`}>
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900 mb-1 truncate">
                                        {product.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2 capitalize">
                                        {product.category}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <span className="text-sm text-yellow-500">
                                            ★ {product.rating?.rate || "4.5"}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <div className="px-4 pb-4">
                                <Button
                                    variant="primary"
                                    size="sm"
                                    fullWidth
                                    onClick={() => addToCart(product)}
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Phân trang */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </MainLayout>
    );
};

export default Products;
