import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useGetTags } from "../hooks/tags/use-get-tags";
import Pagination from "../components/common/Pagination";
import { useGetPosts } from "../hooks/posts/use-get-posts";
import { config } from "../config/env";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const { data: tagsData } = useGetTags({
    pagination: {
      limit: 999,
    },
    options: {
      staleTime: 0,
    },
  });

  const { data: postsData } = useGetPosts({
    fields: ["id", "title", "subtitle", "createdAt"],
    filters: {
      title: { $containsi: searchTerm },
      ...(selectedTag && {
        tags: {
          id: selectedTag,
        },
      }),
    },
    populate: {
      image: {
        fields: ["url"],
      },
      tags: {
        fields: ["id", "name"],
      },
    },
    pagination: {
      page: currentPage,
      pageSize: 6,
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

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {(postsData.data || []).length > 0 ? (
            (postsData.data || []).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${config.BACKEND_URL}${post.image?.url}`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-2">
                    {post.createdAt}
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-[#8b5e34]">
                    {post.title}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(post.tags || []).map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-amber-50 text-[#8b5e34] px-2 py-1 text-xs rounded-full"
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag.name}
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
            </div>
          )}
        </div>

        {/* Phân trang */}
        <Pagination
          currentPage={postsData.meta?.pagination?.page || 1}
          totalPages={postsData.meta?.pagination?.pageCount || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </MainLayout>
  );
};

export default Blog;
