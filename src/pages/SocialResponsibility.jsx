import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

const SocialResponsibility = () => {
    return (
        <MainLayout>
            <div className="container mx-auto py-8 px-4 md:px-8">
                <Helmet>
                    <title>Trách nhiệm xã hội - Chàng Trai Gỗ</title>
                    <meta
                        name="description"
                        content="Góp một món đồ chơi – Gieo nhiều hạt mầm tri thức. Chiến dịch cộng đồng 'Gỗ đến biên cương' của Chàng Trai Gỗ."
                    />
                </Helmet>

                {/* Breadcrumb */}
                <nav className="flex mb-6 text-sm">
                    <Link to="/" className="text-gray-500 hover:text-gray-700">
                        Trang chủ
                    </Link>
                    <span className="mx-2 text-gray-500">›</span>
                    <span className="text-gray-900">Trách nhiệm xã hội</span>
                </nav>

                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-10">
                    <h1 className="text-3xl font-bold mb-8 text-center text-[#d89c4a]">
                        Trách nhiệm xã hội
                    </h1>

                    {/* Hero section */}
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-bold mb-6 text-[#8b5e34]">
                            Góp một món đồ chơi – Gieo nhiều hạt mầm tri thức
                        </h2>
                        <p className="text-lg mb-4 max-w-3xl mx-auto">
                            Chúng tôi tin rằng: giáo dục không nên là đặc quyền
                            – mà là quyền được tiếp cận của tất cả trẻ em, dù ở
                            bất kỳ nơi đâu.
                        </p>
                        <p className="text-lg mb-8 max-w-3xl mx-auto">
                            Vì vậy, bên cạnh việc tạo ra những món đồ chơi STEM
                            chất lượng, STEM4GOOD còn mang trong mình một sứ
                            mệnh lớn hơn: đồng hành cùng những vùng đất còn
                            nhiều khó khăn trong hành trình gieo mầm tri thức.
                        </p>
                        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1588075592446-265bad68bfc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                                alt="Trẻ em vùng cao chơi đồ chơi gỗ"
                                className="absolute w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                <h3 className="text-white text-2xl md:text-3xl font-bold px-4 text-center">
                                    Mỗi món đồ chơi là một cơ hội giáo dục
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Campaign section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#8b5e34] border-b-2 border-[#d89c4a] pb-2">
                            Chiến dịch cộng đồng: GỖ ĐẾN BIÊN CƯƠNG
                        </h2>
                        <p className="mb-6">
                            Với mỗi sản phẩm được bán ra, chúng tôi cam kết
                            trích từ 10.000 – 20.000 VNĐ vào Quỹ Gỗ để thực hiện
                            các hoạt động cộng đồng thiết thực:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-[#d89c4a]">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4 text-[#d89c4a]">
                                        🎓
                                    </span>
                                    <h3 className="text-xl font-bold">
                                        Trao tặng 30 học bổng khuyến học
                                    </h3>
                                </div>
                                <p className="mb-4">
                                    Dành cho học sinh tiểu học và THCS có hoàn
                                    cảnh khó khăn tại các xã vùng biên giới (đặc
                                    biệt tại các tỉnh như Lào Cai, Kon Tum,
                                    Quảng Trị...).
                                </p>
                                <p>
                                    Mỗi suất học bổng trị giá 1.000.000 VNĐ, là
                                    một lời động viên nhỏ bé nhưng đầy ấm áp để
                                    các em tiếp tục hành trình học tập.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-[#d89c4a]">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-4 text-[#d89c4a]">
                                        🧩
                                    </span>
                                    <h3 className="text-xl font-bold">
                                        Xây dựng "Phòng học STEM Gỗ" đầu tiên
                                        tại vùng biên
                                    </h3>
                                </div>
                                <p className="mb-4">
                                    Một không gian học tập được trang bị các mô
                                    hình STEM từ gỗ do chính STEM4GOOD phát
                                    triển – giúp học sinh tại đây lần đầu tiếp
                                    cận tư duy khoa học – kỹ thuật thông qua
                                    hình thức học mà chơi.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                            <p className="font-medium">
                                Dự án sẽ được triển khai vào cuối năm 2025, với
                                mục tiêu nhân rộng mô hình nếu có sự đồng hành
                                lâu dài từ cộng đồng.
                            </p>
                        </div>
                    </div>

                    {/* How to contribute section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#8b5e34] border-b-2 border-[#d89c4a] pb-2">
                            Cách bạn có thể góp phần
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 mb-8">
                            <li>
                                <span className="font-medium">
                                    Mỗi món đồ chơi bạn mua = 1 viên gạch
                                </span>{" "}
                                cho giấc mơ học tập của trẻ em khó khăn.
                            </li>
                            <li>
                                <span className="font-medium">
                                    Giới thiệu STEM4GOOD đến bạn bè, gia đình
                                </span>{" "}
                                – để lan tỏa thông điệp nhân văn.
                            </li>
                            <li>
                                Nếu bạn là{" "}
                                <span className="font-medium">
                                    tổ chức hoặc cá nhân muốn đồng hành tài
                                    trợ/sát cánh cùng chiến dịch
                                </span>{" "}
                                – đừng ngần ngại liên hệ với chúng tôi.
                            </li>
                        </ul>

                        <div className="flex justify-center">
                            <Link
                                to="/contact"
                                className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                Liên hệ với chúng tôi
                            </Link>
                        </div>
                    </div>

                    {/* Closing section */}
                    <div className="text-center py-8 border-t border-gray-200">
                        <p className="text-xl font-semibold mb-2 text-[#8b5e34]">
                            Chúng tôi không chỉ làm đồ chơi.
                        </p>
                        <p className="text-xl font-semibold mb-2 text-[#8b5e34]">
                            Chúng tôi tạo ra cơ hội.
                        </p>
                        <p className="text-xl font-semibold mb-2 text-[#8b5e34]">
                            Và bạn – chính là một phần trong hành trình ấy.
                        </p>
                    </div>

                    {/* Gallery */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-[#8b5e34] text-center">
                            Hình ảnh hoạt động
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80"
                                    alt="Hoạt động cộng đồng"
                                    className="absolute w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1613294326794-e7c71a208164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Trao học bổng cho trẻ em"
                                    className="absolute w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Lớp học STEM"
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

export default SocialResponsibility;
