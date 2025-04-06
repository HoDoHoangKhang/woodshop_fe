import ServiceCard from "../ui/ServiceCard";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Phương thức đổi trả",
            description:
                "Cam kết đổi trả trong vòng 7 ngày đối với các sản phẩm bị lỗi do sản xuất",
            icon: (
                <svg
                    className="w-10 h-10 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    ></path>
                </svg>
            ),
        },
        {
            id: 2,
            title: "Giao hàng toàn quốc",
            description:
                "Chúng tôi nhận giao hàng trên toàn quốc đối với các sản phẩm tại cửa hàng",
            icon: (
                <svg
                    className="w-10 h-10 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                </svg>
            ),
        },
        {
            id: 3,
            title: "Hỗ trợ trực tuyến 24/7",
            description:
                "Luôn sẵn sàng hỗ trợ 24/7. Mọi thắc mắc vui lòng liên hệ hotline: 0945 81 38 78",
            icon: (
                <svg
                    className="w-10 h-10 text-[#d89c4a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                </svg>
            ),
        },
    ];

    return (
        <div className="container mx-auto px-4 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
