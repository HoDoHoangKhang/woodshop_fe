import CategoryCard from "../ui/CategoryCard";
import SectionTitle from "../ui/SectionTitle";

const Categories = () => {
    const categories = [
        {
            id: 1,
            title: "ĐỒ CHƠI GỖ",
            image: "https://www.changtraigo.com/image/cache/catalog/C%E1%BA%A7u%20tr%C6%B0%E1%BB%A3t%20c%E1%BA%A7u%20tu%E1%BB%9Bt%20g%E1%BB%97-Wooden%20Slide-1000x800.jpg",
            link: "/category/do-choi-go",
        },
        {
            id: 2,
            title: "ĐỒ GIA DỤNG",
            image: "https://www.changtraigo.com/image/cache/catalog/Wooden/M%C3%A1y%20t%C3%ADnh%20g%E1%BB%97%20laptop%20g%E1%BB%97%20cho%20b%C3%A9%20(8)-1000x800.jpg",
            link: "/category/do-gia-dung",
        },
        {
            id: 3,
            title: "PHỤ KIỆN VĂN PHÒNG",
            image: "https://www.changtraigo.com/image/cache/catalog/Wooden/h%E1%BB%99p%20b%C3%BAt%20vi%E1%BA%BFt-1000x800.jpeg",
            link: "/category/phu-kien-van-phong",
        },
        {
            id: 4,
            title: "KHUYẾN MÃI",
            image: "https://www.changtraigo.com/image/cache/catalog/b%E1%BB%99%20router%20c%E1%BA%A7n%20tr%E1%BB%A5c-1000x800.jpg",
            link: "/promotion",
        },
    ];

    return (
        <div className="container mx-auto px-4 mb-12">
            <SectionTitle title="DANH MỤC SẢN PHẨM" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        image={category.image}
                        link={category.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
