import { Link } from "react-router-dom";
import { config } from "../../config/env";

const ActivityCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={`${config.BACKEND_URL}${blog.image?.url}`}
        alt={blog?.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-[#3d3d3d]">{blog?.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog?.subtitle}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-[#d89c4a] font-medium hover:underline inline-block px-6 py-2 border border-[#d89c4a] rounded hover:bg-[#d89c4a] hover:text-white transition-colors"
        >
          XEM THÊM
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard;
