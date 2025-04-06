import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { fetchProducts, fetchCategories } from "../services/api";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

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
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">Tất cả sản phẩm</h1>

                {/* Category Filter */}
                <div className="mb-6 overflow-x-auto pb-2">
                    <div className="flex space-x-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full capitalize whitespace-nowrap ${
                                    selectedCategory === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
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

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">
                            Không tìm thấy sản phẩm nào trong danh mục này.
                        </p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default Products;
