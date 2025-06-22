import { Link } from "react-router-dom";
import Button from "../ui/Button";
import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh]">
      <div className="w-full h-full overflow-hidden">
        <img
          src={heroImage}
          alt="Đồ chơi gỗ trẻ em"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-16">
          HANDS-ON LEARNING, MINDS-ON GROWING
        </h1>
        <p className="text-lg text-white mb-6 drop-shadow-md">
          Đồ chơi tụi mình chọn – Yêu thương tụi mình trao.
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
