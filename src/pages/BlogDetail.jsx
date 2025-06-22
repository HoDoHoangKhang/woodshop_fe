import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { config } from "../config/env";
import { useGetPosts } from "../hooks/posts/use-get-posts";
import MainLayout from "../layouts/MainLayout";

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
              src={`${config.BACKEND_URL}${post.image?.url}`}
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
                {(post.tags || []).map((tag) => (
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

            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
                      src={relatedPost.image?.url}
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
