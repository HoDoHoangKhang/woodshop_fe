import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý gửi form ở đây
        console.log("Form submitted:", formData);
        // Có thể thêm code gửi API ở đây
    };

    return (
        <MainLayout>
            <div className="container mx-auto py-8 px-4 max-w-6xl">
                <Helmet>
                    <title>Liên hệ - Chàng Trai Gỗ</title>
                    <meta
                        name="description"
                        content="Thông tin liên hệ Chàng Trai Gỗ"
                    />
                </Helmet>

                <h1 className="text-2xl font-bold mb-6 uppercase border-b border-gray-200 pb-2">
                    LIÊN HỆ
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Thông tin liên hệ */}
                    <div className="text-gray-700">
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold mb-3">
                                Công Ty TNHH Sản Xuất - Thương Mại Chàng Trai Gỗ
                            </h2>
                            <p className="mb-2">
                                <span className="font-medium">MST:</span> 600
                                157 6774
                            </p>
                            <p className="mb-2">
                                <span className="font-medium">Website:</span>{" "}
                                www.changtraigo.com
                            </p>
                            <p className="mb-2">
                                <span className="font-medium">Fanpage:</span>{" "}
                                <a
                                    href="https://www.facebook.com/changtraigo/"
                                    className="text-blue-600 hover:underline"
                                >
                                    https://www.facebook.com/changtraigo/
                                </a>
                            </p>
                        </div>

                        <div className="mb-7">
                            <h2 className="text-lg font-semibold mb-3 uppercase">
                                ĐỊA CHỈ:
                            </h2>
                            <p className="mb-2">DEWOOD COMPANY LIMITED</p>
                            <p className="mb-2">
                                <span className="font-medium">MST:</span>{" "}
                                0318763733
                            </p>
                            <p className="mb-2">
                                <span className="font-medium">Địa chỉ:</span> 1
                                Đường Thành Lộc 31, Thành Lộc, Quận 12, Hồ Chí
                                Minh
                            </p>
                        </div>

                        {/* Bản đồ Google Maps */}
                        <div className="mb-7">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1738869542394!2d106.62602527586666!3d10.876391889298264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a3381f0069b%3A0x8825b62a79d83f25!2zQ2jDoG5nIFRyYWkgR-G7lQ!5e0!3m2!1svi!2s!4v1700142087794!5m2!1svi!2s"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="border border-gray-300"
                            ></iframe>
                        </div>

                        <div className="mb-7">
                            <h2 className="text-lg font-semibold mb-3 uppercase">
                                HOTLINE:
                            </h2>
                            <p className="mb-2">Hotline</p>
                            <p className="mb-2">
                                <span className="font-medium">Cửa Hàng:</span>{" "}
                                0945 81 3878
                            </p>
                            <p className="mb-2">
                                <span className="font-medium">
                                    Đại Lý & Gia Công:
                                </span>{" "}
                                0969 400 402
                            </p>
                        </div>

                        <div className="mb-7">
                            <h2 className="text-lg font-semibold mb-3 uppercase">
                                EMAIL:
                            </h2>
                            <p className="mb-2">changtraigo@changtraigo.com</p>
                        </div>
                    </div>

                    {/* Form liên hệ */}
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 bg-white p-6 border border-gray-100 shadow-sm"
                        >
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Họ tên của bạn"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Địa chỉ email của bạn"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Số điện thoại của bạn"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Nội dung"
                                    rows="8"
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a] resize-none"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white px-7 py-2.5 font-medium"
                                >
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
