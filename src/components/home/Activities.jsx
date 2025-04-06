import ActivityCard from "../ui/ActivityCard";
import SectionTitle from "../ui/SectionTitle";

const Activities = () => {
    const activities = [
        {
            id: 1,
            title: "Trẻ em làm quen với đồ chơi gỗ",
            description:
                "Trẻ em tìm hiểu về đồ chơi gỗ, phát triển trí tuệ và sáng tạo với đồ chơi từ thiên nhiên.",
            image: "https://www.changtraigo.com/image/cache/catalog/News/Tr%E1%BA%BBem/52154962_2247405878620495_5182849507809894400_n-1000x800.jpg",
            link: "/news/activity-1",
        },
        {
            id: 2,
            title: "Chơi và học với đồ chơi gỗ",
            description:
                "Trẻ phát triển kỹ năng vận động tinh và trí tưởng tượng thông qua các hoạt động với đồ chơi gỗ.",
            image: "https://www.changtraigo.com/image/cache/catalog/News/Tr%E1%BA%BBem/24231594_10155010589741781_6745342874307282063_n-1000x800.jpg",
            link: "/news/activity-2",
        },
        {
            id: 3,
            title: "Ngành gỗ bền vững",
            description:
                "Chúng tôi cam kết phát triển ngành gỗ bền vững, bảo vệ môi trường và mang lại giá trị cho cộng đồng.",
            image: "https://www.changtraigo.com/image/cache/catalog/News/Ng%C3%A0nh%20g%E1%BB%97/c5-1000x800.jpg",
            link: "/news/activity-3",
        },
    ];

    return (
        <div className="container mx-auto px-4 mb-12">
            <SectionTitle title="HOẠT ĐỘNG CHÀNG TRAI GỖ" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activities.map((activity) => (
                    <ActivityCard
                        key={activity.id}
                        title={activity.title}
                        description={activity.description}
                        image={activity.image}
                        link={activity.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Activities;
