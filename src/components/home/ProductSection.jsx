import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import SectionTitle from "../ui/SectionTitle";

const ProductSection = ({
    title,
    products,
    addToCart,
    showDiscount = false,
    viewAllLink = null,
    maxItems = 8,
}) => {
    return (
        <div className="container mx-auto px-4 mb-12">
            <SectionTitle title={title} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.slice(0, maxItems).map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        showDiscount={showDiscount}
                    />
                ))}
            </div>

            {viewAllLink && (
                <div className="text-center mt-6">
                    <Link
                        to={viewAllLink}
                        className="inline-block px-6 py-3 bg-[#d89c4a] text-white font-medium rounded hover:bg-[#b07a2e]"
                    >
                        Xem thêm
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProductSection;
