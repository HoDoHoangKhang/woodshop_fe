import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Founder = () => {
    return (
        <section className="py-16 bg-white w-full">
            <div className="px-4">
                <div className="w-full">
                    <div className="text-center mb-12">
                        <SectionTitle title="FOUNDER" />
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            {/* Avatar placeholder */}
                            <div className="flex-shrink-0">
                                <div
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center shadow-lg"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #f89c4a, #f97316)",
                                    }}
                                >
                                    <span className="text-white text-4xl md:text-5xl font-bold">
                                        T
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                    Trương Đình Trung
                                </h3>

                                <p
                                    className="font-semibold mb-6"
                                    style={{ color: "#f89c4a" }}
                                >
                                    Học sinh Trường THPT Chuyên Lê Hồng Phong –
                                    TP.HCM
                                </p>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Trung mang theo{" "}
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            tinh thần cầu tiến
                                        </span>
                                        ,
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            {" "}
                                            sự sáng tạo
                                        </span>{" "}
                                        và
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            {" "}
                                            lòng trân quý giá trị giáo dục
                                        </span>
                                        đến với từng sản phẩm của mình.
                                    </p>

                                    <p>
                                        Với xuất phát điểm là một học sinh yêu
                                        thích
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            {" "}
                                            lắp ráp
                                        </span>
                                        ,
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            {" "}
                                            khoa học
                                        </span>{" "}
                                        và
                                        <span
                                            className="font-semibold"
                                            style={{ color: "#f89c4a" }}
                                        >
                                            {" "}
                                            thiết kế
                                        </span>
                                        , Trung thành lập STEM4GOOD với mong
                                        muốn mang đến cho trẻ em Việt Nam những
                                        món đồ chơi không chỉ đẹp mà còn thật sự
                                        có ý nghĩa giáo dục.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
