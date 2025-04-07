import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Sử dụng dữ liệu mẫu từ Blog.jsx
import { blogPosts } from "./Blog";
import { config } from "../config/env";
import { useGetPosts } from "../hooks/posts/use-get-posts";

const BlogDetail = () => {
  const { id } = useParams();

  const { data: postsData } = useGetPosts({
    fields: ["id", "title", "subtitle", "content", "createdAt"],
    filters: {
      id,
    },
    populate: {
      image: {
        fields: ["url"],
      },
      tags: {
        fields: ["id", "name"],
      },
    },
    options: {
      staleTime: 0,
    },
  });

  const { data: relatedPosts } = useGetPosts({
    fields: ["id", "title", "subtitle", "createdAt"],
    filters: {
      id: { $ne: id },
      tags: { id: postsData?.data?.[0]?.tags?.[0]?.id },
    },
    populate: {
      image: {
        fields: ["url"],
      },
      tags: {
        fields: ["id", "name"],
      },
    },
    options: {
      staleTime: 0,
    },
  });

  const post = postsData?.data?.[0] || null;

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto py-20 px-4 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#d89c4a] mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 md:px-8">
        <Helmet>
          <title>{post.title} - Chàng Trai Gỗ</title>
          {/* <meta
            name="description"
            content={postsData.content.substring(0, 160)}
          /> */}
        </Helmet>

        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <Link to="/blog" className="text-gray-500 hover:text-gray-700">
            Tin tức & Bài viết
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Hình ảnh bài viết */}
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <img
              src={`${config.BACKEND_URL}${post.image.url}`}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            {/* Thông tin bài viết */}
            <div className="mb-6">
              <div className="flex gap-2 mb-3">
                <span className="text-sm text-gray-500">{post.createdAt}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">Chàng Trai Gỗ</span>
              </div>
              <h1 className="text-3xl font-bold mb-6 text-[#8b5e34]">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    to={`/blog?tag=${tag}`}
                    className="bg-amber-50 text-[#8b5e34] px-3 py-1 text-sm rounded-full hover:bg-amber-100 transition-colors"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nội dung bài viết */}
            <div className="prose max-w-none">
              {/* Đây là nội dung giả lập cho bài viết chi tiết */}
              <p className="mb-4">{}</p>

              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4 text-[#8b5e34]">
                Lợi ích của đồ chơi gỗ
              </h2>
              <p className="mb-4">
                Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">An toàn cho trẻ em</li>
                <li className="mb-2">Thân thiện với môi trường</li>
                <li className="mb-2">Bền bỉ theo thời gian</li>
                <li className="mb-2">Phát triển kỹ năng vận động tinh</li>
                <li className="mb-2">Kích thích trí tưởng tượng</li>
              </ul>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
              <blockquote className="border-l-4 border-[#d89c4a] pl-4 italic my-6">
                "Đồ chơi gỗ không chỉ mang lại niềm vui mà còn giúp trẻ phát
                triển nhiều kỹ năng quan trọng. Với thiết kế đơn giản nhưng đầy
                cảm hứng, chúng là công cụ tuyệt vời để kích thích trí tưởng
                tượng và sáng tạo của trẻ."
              </blockquote>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl
                nisl sit amet nisl.
              </p>
            </div>

            {/* Chia sẻ bài viết */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Chia sẻ bài viết</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bài viết liên quan */}
        {(relatedPosts.data || []).length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#8b5e34]">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(relatedPosts.data || []).map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image.url}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-2">
                      {relatedPost.createdAt}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#8b5e34]">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedPost.content}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
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
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default BlogDetail;
