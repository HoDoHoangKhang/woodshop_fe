import ServiceCard from "../ui/ServiceCard";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Thân thiện môi trường",
            description:
                "Sản phẩm được làm từ gỗ bền vững, không độc hại giúp bảo vệ thiên nhiên và tương lai của trẻ.",
            icon: (
                <svg
                    className="w-8 h-8 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            ),
        },
        {
            id: 2,
            title: "An toàn tuyệt đối",
            description:
                "Đồ chơi được sản xuất theo tiêu chuẩn an toàn nghiêm ngặt, không chứa hóa chất độc hại.",
            icon: (
                <svg
                    className="w-8 h-8 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                </svg>
            ),
        },
        {
            id: 3,
            title: "Phát triển kỹ năng",
            description:
                "Thiết kế thông minh giúp phát triển kỹ năng vận động tinh, tư duy logic và sáng tạo.",
            icon: (
                <svg
                    className="w-8 h-8 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                </svg>
            ),
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg p-8 border border-[#d89c4a]"
                    >
                        <div className="bg-[#FFF6EA] rounded-full w-16 h-16 mb-6 flex items-center justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
