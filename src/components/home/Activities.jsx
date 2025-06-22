import { Link } from "react-router-dom";
import { useGetPosts } from "../../hooks/posts/use-get-posts";
import ActivityCard from "../ui/ActivityCard";
import SectionTitle from "../ui/SectionTitle";

const Activities = () => {
  const { data: postsData } = useGetPosts({
    fields: ["id", "title", "subtitle", "createdAt"],
    populate: {
      image: {
        fields: ["url"],
      },
      tags: {
        fields: ["id", "name"],
      },
    },
    pagination: {
      page: 1,
      pageSize: 3,
    },
    sort: {
      createdAt: "desc",
    },
    options: {
      staleTime: 0,
    },
  });

  return (
    <div className="container mx-auto px-4 mb-12">
      <SectionTitle title="BÀI VIẾT MỚI NHẤT" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(postsData.data || []).map((blog) => (
          <ActivityCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Link
          to={"/blog"}
          className="inline-block px-6 py-3 bg-[#d89c4a] text-white font-medium rounded hover:bg-[#b07a2e]"
        >
          Xem thêm
        </Link>
      </div>
    </div>
  );
};

export default Activities;
