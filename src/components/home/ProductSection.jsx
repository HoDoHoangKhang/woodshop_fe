import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import SectionTitle from "../ui/SectionTitle";
import { useGetProducts } from "../../hooks/products/use-get-products";
import { config } from "../../config/env";
import { useCart } from "../../context/CartContext";

const ProductSection = ({ title, maxItems = 8 }) => {
  const { addToCart } = useCart();
  const { data: productsData } = useGetProducts({
    fields: [
      "id",
      "name",
      "description",
      "price",
      "originalPrice",
      "createdAt",
    ],
    populate: {
      primaryImage: {
        fields: ["url"],
      },
      categories: {
        fields: ["id", "name"],
      },
    },
    pagination: {
      pageSize: maxItems,
    },
    sort: {
      createdAt: "desc",
    },
    options: {
      staleTime: 0,
    },
  });

  const products = (productsData?.data || []).map((product) => ({
    id: product.id,
    title: product.name,
    image: `${config.BACKEND_URL}${product.primaryImage?.url}`,
    price: product.price,
    originalPrice: product.originalPrice,
    discount: product.originalPrice
      ? Math.round((1 - product.price / product.originalPrice) * 100) + "%"
      : null,
    discountPrice: product.price,
  }));

  return (
    <div className="container mx-auto px-4 mb-12">
      <SectionTitle title={title} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to={"/products"}
          className="inline-block px-6 py-3 bg-[#d89c4a] text-white font-medium rounded hover:bg-[#b07a2e]"
        >
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
