import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useGetTags } from "../hooks/tags/use-get-tags";

// Dữ liệu mẫu cho các bài post
export const blogPosts = [
  {
    id: 1,
    title: "Đồ chơi gỗ - Lựa chọn xanh cho trẻ thơ",
    content:
      "Đồ chơi gỗ không chỉ là món đồ chơi an toàn mà còn giúp phát triển tư duy sáng tạo và khả năng vận động tinh cho trẻ. Với nguyên liệu từ thiên nhiên, đồ chơi gỗ thân thiện với môi trường và bền bỉ theo thời gian...",
    image:
      "https://images.unsplash.com/photo-1577896852618-ac6774c12543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "15/06/2023",
    tags: ["đồ chơi gỗ", "stem", "phát triển trẻ em"],
  },
  {
    id: 2,
    title: "5 lợi ích của đồ chơi STEM cho trẻ mầm non",
    content:
      "Đồ chơi STEM không chỉ mang lại niềm vui mà còn giúp trẻ phát triển tư duy logic, kỹ năng giải quyết vấn đề và sự sáng tạo. Nghiên cứu cho thấy trẻ em tiếp xúc sớm với các khái niệm STEM sẽ có lợi thế lớn trong học tập sau này...",
    image:
      "https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "28/07/2023",
    tags: ["stem", "giáo dục", "mầm non"],
  },
  {
    id: 3,
    title: "Quy trình sản xuất đồ chơi gỗ bền vững",
    content:
      "Từ những khúc gỗ thô sơ đến sản phẩm tinh xảo, quy trình sản xuất đồ chơi gỗ đòi hỏi sự tỉ mỉ và trách nhiệm với môi trường. Chúng tôi chỉ sử dụng gỗ từ các nguồn bền vững và áp dụng các biện pháp thân thiện với môi trường trong toàn bộ quy trình...",
    image:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "10/08/2023",
    tags: ["sản xuất", "phát triển bền vững", "gỗ bền vững"],
  },
  {
    id: 4,
    title: "Trò chơi phát triển tư duy cho trẻ 3-5 tuổi",
    content:
      "Giai đoạn từ 3-5 tuổi là thời kỳ vàng cho sự phát triển não bộ của trẻ. Các trò chơi đơn giản nhưng hiệu quả có thể giúp trẻ xây dựng nền tảng tư duy vững chắc. Bài viết giới thiệu 10 trò chơi dễ thực hiện tại nhà...",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    date: "23/09/2023",
    tags: ["tư duy", "trẻ em", "học qua chơi"],
  },
  {
    id: 5,
    title: "Giáo dục STEM tại Việt Nam - Thực trạng và tiềm năng",
    content:
      "Giáo dục STEM đang ngày càng được chú trọng tại Việt Nam. Bài viết phân tích thực trạng, thách thức và tiềm năng phát triển của mô hình giáo dục này, đồng thời giới thiệu các sáng kiến đang được triển khai tại các trường học...",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    date: "15/10/2023",
    tags: ["stem", "giáo dục", "Việt Nam"],
  },
  {
    id: 6,
    title: "Tương lai của đồ chơi gỗ trong thời đại số",
    content:
      "Mặc dù công nghệ số đang thống trị thị trường đồ chơi, đồ chơi gỗ vẫn giữ vững vị thế của mình. Bài viết khám phá sự kết hợp giữa truyền thống và hiện đại, cũng như xu hướng phát triển của đồ chơi gỗ trong tương lai...",
    image:
      "https://images.unsplash.com/photo-1597392582469-a697323d52c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80",
    date: "07/11/2023",
    tags: ["công nghệ", "đồ chơi gỗ", "tương lai"],
  },
];

// Lấy tất cả các tag từ dữ liệu
const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags);
};

const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const allTags = getAllTags();

  const { data: tagsData } = useGetTags({
    pagination: {
      limit: 999,
    },
    options: {
      staleTime: 0,
    },
  });

  // Xử lý tìm kiếm và lọc
  useEffect(() => {
    let filteredPosts = blogPosts;

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Lọc theo tag
    if (selectedTag) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.includes(selectedTag)
      );
    }

    setPosts(filteredPosts);
  }, [searchTerm, selectedTag]);

  // Xử lý thay đổi từ khóa tìm kiếm
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Xử lý thay đổi tag lọc
  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 md:px-8">
        <Helmet>
          <title>Tin tức & Bài viết - Chàng Trai Gỗ</title>
          <meta
            name="description"
            content="Cập nhật những tin tức mới nhất về đồ chơi STEM, giáo dục và phát triển bền vững từ Chàng Trai Gỗ."
          />
        </Helmet>

        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-900">Tin tức & Bài viết</span>
        </nav>

        <h1 className="text-3xl font-bold mb-8 text-center text-[#d89c4a]">
          Tin tức & Bài viết
        </h1>

        {/* Tìm kiếm và lọc */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
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
            <div className="w-full md:w-1/2">
              <select
                value={selectedTag}
                onChange={handleTagChange}
                className="w-full py-2 px-4 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent bg-white"
              >
                <option value="">Tất cả chủ đề</option>
                {(tagsData.data || []).map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Danh sách bài viết */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-2 text-[#8b5e34]">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-amber-50 text-[#8b5e34] px-2 py-1 text-xs rounded-full"
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-[#d89c4a] hover:text-[#8b5e34] font-medium inline-flex items-center"
                  >
                    Đọc tiếp
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
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
                Không tìm thấy bài viết nào
              </h3>
              <p className="text-gray-400 mt-2">
                Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn lại chủ đề
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag("");
                }}
                className="mt-4 px-5 py-2 bg-[#d89c4a] text-white rounded-lg hover:bg-[#c88c3a] transition-colors"
              >
                Xem tất cả bài viết
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
