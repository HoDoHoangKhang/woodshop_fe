import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh]">
            <div className="w-full h-full overflow-hidden">
                <img
                    src="https://theme.hstatic.net/1000247582/1000804728/14/ms_banner_img2.jpg?v=124"
                    alt="Đồ chơi gỗ trẻ em"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    Niềm Vui Của Con - Hạnh Phúc Của Ba Mẹ
                </h1>
                <p className="text-lg text-white mb-6 drop-shadow-md">
                    Món đồ chơi thật sự tốt là khi bé phát huy khả năng tưởng
                    tượng và sáng tạo không giới hạn của mình.
                </p>
                <Button
                    size="lg"
                    variant="primary"
                    as={Link}
                    to="/products"
                    className="bg-[#d89c4a] hover:bg-[#b07a2e]"
                >
                    Xem thêm
                </Button>
            </div>
        </div>
    );
};

export default Hero;
