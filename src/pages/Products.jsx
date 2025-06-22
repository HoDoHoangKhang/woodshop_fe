import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Pagination from "../components/common/Pagination";
import ProductCard from "../components/ui/ProductCard";
import { config } from "../config/env";
import { useGetProducts } from "../hooks/products/use-get-products";
import MainLayout from "../layouts/MainLayout";
import { useCart } from "../context/CartContext";
import useToast from "../hooks/useToast";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const { addToCart } = useCart();
    const { success } = useToast();

    const { data: productsData } = useGetProducts({
        fields: [
            "id",
            "name",
            "description",
            "price",
            "originalPrice",
            "createdAt",
        ],
        filters: {
            name: { $containsi: searchTerm },
            ...(selectedCategory && {
                categories: {
                    id: selectedCategory,
                },
            }),
        },
        populate: {
            primaryImage: {
                fields: ["url"],
            },
            categories: {
                fields: ["id", "name"],
            },
        },
        pagination: {
            page: currentPage,
            pageSize: 8,
        },
        sort: {
            createdAt: "desc",
        },
        options: {
            staleTime: 0,
        },
    });

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout>
            <div className="container mx-auto py-8 px-4 md:px-8">
                <Helmet>
                    <title>Sản phẩm - Chàng Trai Gỗ</title>
                    <meta
                        name="description"
                        content="Khám phá bộ sưu tập đồ chơi gỗ chất lượng cao từ Chàng Trai Gỗ. Sản phẩm an toàn, thân thiện với môi trường và giúp phát triển trí tuệ cho trẻ."
                    />
                </Helmet>

                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm">
                    <Link to="/" className="text-gray-500 hover:text-gray-700">
                        Trang chủ
                    </Link>
                    <span className="mx-2 text-gray-500">›</span>
                    <span className="text-gray-900">Sản phẩm</span>
                </nav>

                <h1 className="text-3xl font-bold mb-8 text-center text-[#d89c4a]">
                    Sản phẩm của chúng tôi
                </h1>

                {/* Tìm kiếm và lọc */}
                <div className="rounded-lg p-4 md:p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-end">
                        <div className="w-[40%] relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent"
                            />
                            <svg
                                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                                xmlns="http://www.w3.org/2000/svg"
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
                        </div>
                    </div>
                </div>

                {/* Danh sách sản phẩm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                    {(productsData?.data || []).length > 0 ? (
                        (productsData?.data || []).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={{
                                    id: product.id,
                                    title: product.name,
                                    image: `${config.BACKEND_URL}${product.primaryImage?.url}`,
                                    price: product.price,
                                    originalPrice: product.originalPrice,
                                    discountPrice: product.price,
                                }}
                                addToCart={(product) => {
                                    addToCart(product, 1);
                                    success("Đã thêm sản phẩm vào giỏ hàng!");
                                }}
                                showDiscount={true}
                            />
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 py-16 text-center">
                            <svg
                                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-xl font-medium text-gray-500">
                                Không tìm thấy sản phẩm nào
                            </h3>
                            <p className="text-gray-400 mt-2">
                                Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn
                                lại danh mục
                            </p>
                        </div>
                    )}
                </div>

                {/* Phân trang */}
                <Pagination
                    currentPage={productsData?.meta?.pagination?.page || 1}
                    totalPages={productsData?.meta?.pagination?.pageCount || 1}
                    onPageChange={handlePageChange}
                />
            </div>
        </MainLayout>
    );
};

export default Products;
