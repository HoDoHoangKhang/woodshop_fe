import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useGetProducts } from "../hooks/products/use-get-products";
import { config } from "../config/env";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-custom.css";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [activeImage, setActiveImage] = useState(0);
    const { addToCart } = useCart();

    const { data: productData } = useGetProducts({
        fields: [
            "id",
            "name",
            "description",
            "details",
            "price",
            "originalPrice",
            "video_url",
            "purchase_instruction",
            "preserve",
            "createdAt",
        ],
        filters: {
            id,
        },
        populate: {
            primaryImage: {
                fields: ["url"],
            },
            images: {
                fields: ["url"],
            },
            categories: {
                fields: ["id", "name"],
            },
        },
        options: {
            staleTime: 0,
        },
    });

    const { data: relatedProducts } = useGetProducts({
        fields: ["id", "name", "description", "price", "originalPrice"],
        filters: {
            id: { $ne: id },
            categories: {
                id: productData?.data?.[0]?.category?.id,
            },
        },
        populate: {
            images: {
                fields: ["url"],
            },
            primaryImage: {
                fields: ["url"],
            },
            categories: {
                fields: ["id", "name"],
            },
        },
        pagination: {
            limit: 4,
        },
        options: {
            staleTime: 0,
        },
    });

    const product = productData?.data?.[0];

    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            toast.success("Đã thêm sản phẩm vào giỏ hàng!", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    if (!product) {
        return (
            <MainLayout>
                <div className="container mx-auto py-20 px-4 text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#d89c4a] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Đang tải...</p>
                </div>
            </MainLayout>
        );
    }

    // Tạo mảng tất cả ảnh bao gồm ảnh chính và ảnh phụ
    const allImages = [product.primaryImage, ...(product.images || [])].filter(
        Boolean
    );

    // Cấu hình cho Slick Carousel
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <MainLayout>
            <ToastContainer />
            <div className="container mx-auto py-8 px-4 md:px-8">
                <Helmet>
                    <title>{product.name} - Chàng Trai Gỗ</title>
                    <meta
                        name="description"
                        content={product.description?.replace(/<[^>]*>/g, "")}
                    />
                </Helmet>

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
                    <span className="text-gray-900">{product.name}</span>
                </nav>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                        {/* Hình ảnh sản phẩm */}
                        <div>
                            <div className="flex flex-col gap-4">
                                {/* Ảnh chính */}
                                <div className="relative aspect-square overflow-hidden rounded-lg">
                                    <img
                                        src={`${config.BACKEND_URL}${allImages[activeImage]?.url}`}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Danh sách ảnh phụ với Slick Carousel */}
                                {allImages.length > 1 && (
                                    <div className="thumbnail-slider">
                                        <Slider {...sliderSettings}>
                                            {allImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-1 cursor-pointer ${
                                                        activeImage === index
                                                            ? "ring-2 ring-[#d89c4a] rounded-lg"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setActiveImage(index)
                                                    }
                                                >
                                                    <div className="aspect-square rounded-lg overflow-hidden">
                                                        <img
                                                            src={`${config.BACKEND_URL}${image.url}`}
                                                            alt={`${
                                                                product.name
                                                            } - Ảnh ${
                                                                index + 1
                                                            }`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                )}
                            </div>

                            {product.video_url && (
                                <div className="mt-4">
                                    <iframe
                                        src={product.video_url.replace(
                                            "watch?v=",
                                            "embed/"
                                        )}
                                        title={product.name}
                                        className="w-full aspect-video rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>

                        {/* Thông tin sản phẩm */}
                        <div>
                            <div className="mb-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {product.category?.name}
                                </div>
                                <h1 className="text-3xl font-bold mb-4 text-[#8b5e34]">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-2xl font-bold text-[#d89c4a]">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>
                                <div
                                    className="prose max-w-none mb-6"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            </div>

                            {/* Số lượng và nút mua hàng */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-gray-700">
                                        Số lượng:
                                    </span>
                                    <div className="flex items-center border rounded-lg">
                                        <button
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
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
                                            onChange={(e) =>
                                                setQuantity(
                                                    Math.max(
                                                        1,
                                                        parseInt(
                                                            e.target.value
                                                        ) || 1
                                                    )
                                                )
                                            }
                                            className="w-16 text-center border-x py-1"
                                        />
                                        <button
                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="w-full bg-[#d89c4a] text-white py-3 rounded-lg hover:bg-[#c88c3a] transition-colors"
                                    onClick={handleAddToCart}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>

                            {/* Hướng dẫn mua hàng */}
                            <div
                                className="prose max-w-none mb-6"
                                dangerouslySetInnerHTML={{
                                    __html: product.purchase_instruction,
                                }}
                            />
                        </div>
                    </div>

                    {/* Tabs thông tin chi tiết */}
                    <div className="border-t">
                        <div className="flex border-b">
                            <button
                                className={`px-6 py-4 font-medium ${
                                    activeTab === "description"
                                        ? "text-[#d89c4a] border-b-2 border-[#d89c4a]"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setActiveTab("description")}
                            >
                                Mô tả sản phẩm
                            </button>
                            <button
                                className={`px-6 py-4 font-medium ${
                                    activeTab === "details"
                                        ? "text-[#d89c4a] border-b-2 border-[#d89c4a]"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setActiveTab("details")}
                            >
                                Chi tiết sản phẩm
                            </button>
                            <button
                                className={`px-6 py-4 font-medium ${
                                    activeTab === "preserve"
                                        ? "text-[#d89c4a] border-b-2 border-[#d89c4a]"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                onClick={() => setActiveTab("preserve")}
                            >
                                Hướng dẫn bảo quản
                            </button>
                        </div>
                        <div className="p-6">
                            {activeTab === "description" && (
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            )}
                            {activeTab === "details" && (
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: product.details,
                                    }}
                                />
                            )}
                            {activeTab === "preserve" && (
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: product.preserve,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Sản phẩm liên quan */}
                {(relatedProducts?.data || []).length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#8b5e34]">
                            Sản phẩm liên quan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {(relatedProducts?.data || []).map(
                                (relatedProduct) => (
                                    <div
                                        key={relatedProduct.id}
                                        className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                                    >
                                        <Link
                                            to={`/product/${relatedProduct.id}`}
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={`${config.BACKEND_URL}${relatedProduct.primaryImage?.url}`}
                                                    alt={relatedProduct.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <div className="text-xs text-gray-500 mb-2">
                                                    {
                                                        relatedProduct.category
                                                            ?.name
                                                    }
                                                </div>
                                                <h3 className="text-lg font-bold mb-2 text-[#8b5e34]">
                                                    {relatedProduct.name}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-bold text-[#d89c4a]">
                                                        {formatPrice(
                                                            relatedProduct.price
                                                        )}
                                                    </span>
                                                    {relatedProduct.originalPrice && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            {formatPrice(
                                                                relatedProduct.originalPrice
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default ProductDetail;
