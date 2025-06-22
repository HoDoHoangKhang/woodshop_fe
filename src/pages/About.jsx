import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 md:px-8">
        <Helmet>
          <title>Về Chúng Tôi - Chàng Trai Gỗ</title>
          <meta
            name="description"
            content="Gieo mầm đam mê khoa học – Thắp sáng trí tưởng tượng – Nuôi dưỡng tư duy qua từng khối gỗ. Tìm hiểu về sứ mệnh và mục tiêu của Chàng Trai Gỗ."
          />
        </Helmet>

        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-900">Về Chúng Tôi</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10">
          <h1 className="text-3xl font-bold mb-8 text-center text-[#d89c4a]">
            Về Chúng Tôi
          </h1>

          {/* Banner */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 mb-12 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Đồ chơi gỗ STEM"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold px-6 text-center">
                Nuôi dưỡng tư duy qua từng khối gỗ
              </h2>
            </div>
          </div>

          {/* Sứ mệnh */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-10 w-1.5 bg-[#d89c4a] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-[#8b5e34]">Sứ mệnh</h2>
            </div>
            <div className="pl-6">
              <p className="text-xl font-semibold mb-6 text-[#8b5e34] italic">
                Gieo mầm đam mê khoa học – Thắp sáng trí tưởng tượng – Nuôi
                dưỡng tư duy qua từng khối gỗ.
              </p>
              <p className="mb-4 text-gray-700">
                Chúng tôi tin rằng: Mỗi đứa trẻ đều mang trong mình khả năng
                sáng tạo tuyệt vời. Điều cần thiết là những công cụ đơn giản, tự
                nhiên nhưng truyền cảm hứng – và đó chính là những món đồ chơi
                STEM từ gỗ mà chúng tôi tạo ra.
              </p>
            </div>
          </div>

          {/* Nội dung hoạt động */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-10 w-1.5 bg-[#d89c4a] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-[#8b5e34]">
                Nội dung hoạt động
              </h2>
            </div>
            <div className="pl-6">
              <p className="mb-6 text-gray-700">
                Chúng tôi nghiên cứu, thiết kế và sản xuất các dòng đồ chơi giáo
                dục STEM làm từ gỗ tự nhiên, với các đặc điểm:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg border-b-4 border-[#d89c4a]">
                  <div className="h-16 w-16 bg-[#d89c4a] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-gray-700">
                    Kết hợp giữa thẩm mỹ truyền thống và tư duy hiện đại
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg border-b-4 border-[#d89c4a]">
                  <div className="h-16 w-16 bg-[#d89c4a] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-gray-700">
                    Mô phỏng các nguyên lý khoa học, cơ học, toán học… một cách
                    sinh động
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg border-b-4 border-[#d89c4a]">
                  <div className="h-16 w-16 bg-[#d89c4a] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-gray-700">
                    Dễ tiếp cận, dễ sử dụng cho cả trẻ nhỏ & người hướng dẫn
                  </p>
                </div>
                <div className="bg-amber-50 p-5 rounded-lg border-b-4 border-[#d89c4a]">
                  <div className="h-16 w-16 bg-[#d89c4a] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-gray-700">
                    Được phát triển cùng sự tham vấn của các chuyên gia giáo dục
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mục tiêu */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-10 w-1.5 bg-[#d89c4a] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-[#8b5e34]">Mục tiêu</h2>
            </div>
            <div className="pl-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#d89c4a] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-gray-700">
                    Đưa sản phẩm đến tay 5.000 trẻ em trên toàn quốc trong 3 năm
                    tới.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#d89c4a] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-gray-700">
                    Xây dựng một cộng đồng ba mẹ và giáo viên cùng nhau chia sẻ
                    – phát triển tư duy giáo dục qua trò chơi.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#d89c4a] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-gray-700">
                    Đưa sản phẩm vào thư viện học cụ của các trường tiểu học,
                    đặc biệt ở vùng nông thôn.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Trách nhiệm cộng đồng */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="h-10 w-1.5 bg-[#d89c4a] rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-[#8b5e34]">
                Trách nhiệm cộng đồng
              </h2>
            </div>
            <div className="pl-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <p className="mb-4 text-gray-700">
                  Chúng tôi tin rằng mỗi sản phẩm được bán ra đều nên mang lại
                  giá trị không chỉ cho người mua, mà còn cho cộng đồng. Vì thế,
                  với mỗi sản phẩm được bán ra, STEM4GOOD sẽ trích 10.000 –
                  20.000 VNĐ vào Quỹ Gỗ – Học bổng Biên Cương, nhằm trao học
                  bổng và học cụ cho học sinh vùng biên giới, vùng sâu vùng xa
                  có hoàn cảnh khó khăn.
                </p>
                <p className="font-semibold text-[#8b5e34] text-center">
                  Một món đồ chơi nhỏ – một bước đi lớn cho tương lai của nhiều
                  trẻ em Việt.
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/social-responsibility"
                  className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Tìm hiểu thêm về trách nhiệm xã hội
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-[#8b5e34] text-center">
              Hình ảnh hoạt động
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/activity-1.avif"
                  alt="Đồ chơi gỗ STEM"
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/activity-2.avif"
                  alt="Trẻ em chơi đồ chơi gỗ"
                  className="absolute w-full h-full object-cover"
                />
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <img
                  src="/images/activity-1.avif"
                  alt="Xưởng sản xuất đồ chơi gỗ"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
