import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { fetchProducts, fetchCategories } from "../services/api";
import { useCart } from "../context/CartContext";

// Import các component con
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Categories from "../components/home/Categories";
import Testimonial from "../components/home/Testimonial";
import Activities from "../components/home/Activities";
import ProductSection from "../components/home/ProductSection";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const [productsData, categoriesData] = await Promise.all([
                    fetchProducts(16),
                    fetchCategories(),
                ]);
                setProducts(productsData);
                setCategories(categoriesData);
                // Giả lập dữ liệu khuyến mãi
                setPromotions(
                    productsData.slice(0, 12).map((product) => ({
                        ...product,
                        discountPrice: (product.price * 0.8).toFixed(2),
                        originalPrice: product.price.toFixed(2),
                        discount: "20%",
                    }))
                );
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

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
            {/* Hero Banner */}
            <Hero />

            {/* Services */}
            <Services />

            {/* Categories Section */}
            <Categories />

            {/* Promotion Products */}
            <ProductSection
                title="COMBO KHUYẾN MÃI"
                products={promotions}
                addToCart={addToCart}
                showDiscount={true}
                viewAllLink="/promotion"
                maxItems={8}
            />

            {/* Testimonial */}
            <Testimonial />

            {/* Activities */}
            <Activities />

            {/* Best Selling Products */}
            <ProductSection
                title="SẢN PHẨM BÁN CHẠY NHẤT"
                products={products}
                addToCart={addToCart}
                maxItems={8}
            />
        </MainLayout>
    );
};

export default Home;
