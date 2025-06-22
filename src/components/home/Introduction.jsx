import React from "react";
import SectionTitle from "../ui/SectionTitle";

const Introduction = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <SectionTitle title="CHÀO MỪNG ĐẾN VỚI STEM4GOOD" />
                    </div>

                    <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                        <p className="mb-6">
                            Nơi những món đồ chơi bằng gỗ tưởng chừng đơn giản
                            lại mở ra cả một thế giới khám phá
                            <span
                                className="font-semibold"
                                style={{ color: "#f89c4a" }}
                            >
                                {" "}
                                khoa học, công nghệ, kỹ thuật và toán học (STEM)
                            </span>
                            .
                        </p>

                        <p>
                            Với chất liệu gỗ tự nhiên an toàn, thiết kế tinh tế
                            – thân thiện, mỗi sản phẩm là một hành trình
                            <span
                                className="font-semibold"
                                style={{ color: "#f89c4a" }}
                            >
                                {" "}
                                học mà chơi, chơi mà học
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
