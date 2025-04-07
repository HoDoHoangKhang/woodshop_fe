import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Promotion = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 22,
        hours: 10,
        minutes: 41,
        seconds: 32,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newSeconds = prevTime.seconds - 1;

                if (newSeconds >= 0) {
                    return { ...prevTime, seconds: newSeconds };
                }

                const newMinutes = prevTime.minutes - 1;
                if (newMinutes >= 0) {
                    return { ...prevTime, minutes: newMinutes, seconds: 59 };
                }

                const newHours = prevTime.hours - 1;
                if (newHours >= 0) {
                    return {
                        ...prevTime,
                        hours: newHours,
                        minutes: 59,
                        seconds: 59,
                    };
                }

                const newDays = prevTime.days - 1;
                if (newDays >= 0) {
                    return {
                        ...prevTime,
                        days: newDays,
                        hours: 23,
                        minutes: 59,
                        seconds: 59,
                    };
                }

                // Nếu hết thời gian, reset về thời gian mặc định
                return { days: 22, hours: 10, minutes: 41, seconds: 32 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Cấu hình chính xác cho slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-[#e89c38] py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <div className="slider-container px-2">
                            <Slider {...settings}>
                                <div className="px-2">
                                    <div className="bg-white p-4 rounded-lg overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-sm z-10">
                                                -30%
                                            </div>
                                            <img
                                                src="https://www.changtraigo.com/image/cache/catalog/Wooden/Combo%20%C4%91%E1%BB%93%20ch%C6%A1i%20g%E1%BB%97%20cho%20b%C3%A9-1000x800.jpg"
                                                alt="Combo Đặc Biệt"
                                                className="w-full h-auto object-cover rounded-t-lg"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h3 className="text-lg font-semibold mb-2 text-center">
                                                Combo Đặc Biệt - Chăng Trai Gỗ
                                            </h3>
                                            <div className="flex justify-center items-center space-x-2 mb-3">
                                                <span className="font-bold text-red-500 text-xl">
                                                    2,290,000₫
                                                </span>
                                                <span className="text-gray-500 line-through">
                                                    3,280,000₫
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="bg-white p-4 rounded-lg overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-sm z-10">
                                                -30%
                                            </div>
                                            <img
                                                src="https://www.changtraigo.com/image/cache/catalog/Combo%204%20xe%20c%C3%B4ng%20tr%C3%ACnh-1000x800.jpg"
                                                alt="Combo 4 Xe Công Trình"
                                                className="w-full h-auto object-cover rounded-t-lg"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h3 className="text-lg font-semibold mb-2 text-center">
                                                Combo 4 Xe Công Trình
                                            </h3>
                                            <div className="flex justify-center items-center space-x-2 mb-3">
                                                <span className="font-bold text-red-500 text-xl">
                                                    690,000₫
                                                </span>
                                                <span className="text-gray-500 line-through">
                                                    980,000₫
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <div className="bg-white p-4 rounded-lg overflow-hidden">
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-sm z-10">
                                                -30%
                                            </div>
                                            <img
                                                src="https://www.changtraigo.com/image/cache/catalog/b%E1%BB%99%20router%20c%E1%BA%A7n%20tr%E1%BB%A5c-1000x800.jpg"
                                                alt="Bộ Router"
                                                className="w-full h-auto object-cover rounded-t-lg"
                                            />
                                        </div>
                                        <div className="pt-3">
                                            <h3 className="text-lg font-semibold mb-2 text-center">
                                                Bộ Router Cần Trục
                                            </h3>
                                            <div className="flex justify-center items-center space-x-2 mb-3">
                                                <span className="font-bold text-red-500 text-xl">
                                                    890,000₫
                                                </span>
                                                <span className="text-gray-500 line-through">
                                                    1,280,000₫
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-lg h-full flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                                KHUYẾN MÃI CỰC HOT
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 text-center">
                                ( COMBO KHUYẾN MÃI HẤP DẪN )
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-[#d89c4a] text-white p-3 rounded-lg text-center">
                                    <div className="text-3xl font-bold">
                                        {timeLeft.days}
                                    </div>
                                    <div className="text-sm">Ngày</div>
                                </div>
                                <div className="bg-[#d89c4a] text-white p-3 rounded-lg text-center">
                                    <div className="text-3xl font-bold">
                                        {timeLeft.hours}
                                    </div>
                                    <div className="text-sm">Giờ</div>
                                </div>
                                <div className="bg-[#d89c4a] text-white p-3 rounded-lg text-center">
                                    <div className="text-3xl font-bold">
                                        {timeLeft.minutes}
                                    </div>
                                    <div className="text-sm">Phút</div>
                                </div>
                                <div className="bg-[#d89c4a] text-white p-3 rounded-lg text-center">
                                    <div className="text-3xl font-bold">
                                        {timeLeft.seconds}
                                    </div>
                                    <div className="text-sm">Giây</div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    to="/promotion"
                                    className="inline-block px-6 py-3 bg-[#d89c4a] text-white font-medium rounded hover:bg-[#b07a2e] transition-colors"
                                >
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
