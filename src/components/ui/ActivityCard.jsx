import { Link } from "react-router-dom";

const ActivityCard = ({ image, title, description, link }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img src={image} alt={title} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-[#3d3d3d]">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
                <Link
                    to={link}
                    className="text-[#d89c4a] font-medium hover:underline inline-block px-6 py-2 border border-[#d89c4a] rounded hover:bg-[#d89c4a] hover:text-white transition-colors"
                >
                    XEM THÊM
                </Link>
            </div>
        </div>
    );
};

export default ActivityCard;
