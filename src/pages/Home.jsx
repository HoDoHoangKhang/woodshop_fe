import MainLayout from "../layouts/MainLayout";
import Activities from "../components/home/Activities";
import Founder from "../components/home/Founder";
import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import ProductSection from "../components/home/ProductSection";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Introduction />
      <Services />
      <ProductSection title="SẢN PHẨM MỚI NHẤT" maxItems={6} />
      <Founder />
      <Activities />
    </MainLayout>
  );
};

export default Home;
