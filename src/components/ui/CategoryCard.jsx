import { Link } from "react-router-dom";
import defaultImage from "../../assets/images/product_default.jpg";

const CategoryCard = ({ title, image, link, reverse = false }) => {
    const imageSrc = image || defaultImage;

    return (
        <div className="flex h-56 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {!reverse ? (
                <>
                    <div className="w-1/2 overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/2 bg-[#f3e9d9] flex flex-col items-center justify-center p-4">
                        <h3 className="text-lg font-bold mb-4 text-center">
                            {title}
                        </h3>
                        <Link
                            to={link}
                            className="bg-[#d89c4a] text-white font-medium px-3 py-1.5 rounded hover:bg-[#b07a2e] transition-colors text-sm"
                        >
                            Xem thêm
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/2 bg-[#f3e9d9] flex flex-col items-center justify-center p-4">
                        <h3 className="text-lg font-bold mb-4 text-center">
                            {title}
                        </h3>
                        <Link
                            to={link}
                            className="bg-[#d89c4a] text-white font-medium px-3 py-1.5 rounded hover:bg-[#b07a2e] transition-colors text-sm"
                        >
                            Xem thêm
                        </Link>
                    </div>
                    <div className="w-1/2 overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryCard;
