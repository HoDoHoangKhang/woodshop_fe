const Testimonial = () => {
    return (
        <div className="bg-[#333333] text-white p-8 mb-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                        <div className="rounded-full overflow-hidden w-40 h-40 border-4 border-[#d89c4a]">
                            <img
                                src="https://www.changtraigo.com/image/cache/catalog/ceo-200x200.jpg"
                                alt="CEO Chàng Trai Gỗ"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <h2 className="text-2xl font-bold mb-4 text-[#d89c4a]">
                            CHÀNG TRAI GỖ ĐEM ĐẾN NIỀM VUI CHO CẢ NHÀ
                        </h2>
                        <div className="mb-6">
                            <p className="mb-4">
                                Tôi đã thấy khách hàng của mình vui vẻ với những
                                đứa trẻ. Chúng tôi tự hào theo đuổi đồ chơi
                                THUẦN TỰ NHIÊN thay vì đồ chơi công nghệ! Mang
                                đến cho con bạn những tiếng cười thật tự nhiên.
                            </p>
                            <p className="mb-4">
                                Món đồ chơi thật sự tốt là khi bé phát huy khả
                                năng tưởng tượng và sáng tạo không giới hạn của
                                mình.
                            </p>
                            <p>
                                Gỗ là vật liệu tốt nhất để làm nên món đồ chơi
                                cho trẻ! Chơi với đồ chơi bằng gỗ mang lại cho
                                trẻ sự ấm áp của thiên nhiên.
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-[#d89c4a]">
                                CEO / FOUNDER CHÀNG TRAI GỖ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
