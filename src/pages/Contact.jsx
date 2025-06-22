import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import { strapi } from "../libs/strapi-sdk";
import { useContact } from "../hooks/contact-items/use-contact-items";
import useToast from "../hooks/useToast";

const Contact = () => {
  const { success, error } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    content: "",
  });

  const contactMutation = useContact({
    mutationConfig: {
      onSuccess: () => {
        success("Thông tin liên hệ đã được gửi thành công!");
      },
      onError: () => {
        error(
          "Đã có lỗi xảy ra khi gửi thông tin liên hệ. Vui lòng thử lại sau."
        );
      },
    },
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

    contactMutation.mutate(formData);
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <Helmet>
          <title>Liên hệ - Stem For Good</title>
          <meta name="description" content="Thông tin liên hệ Stem For Good" />
        </Helmet>

        <h1 className="text-2xl font-bold mb-6 uppercase border-b border-gray-200 pb-2 text-[#d89c4a]">
          LIÊN HỆ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Thông tin liên hệ */}
          <div className="text-gray-700">
            <div className="mb-7">
              <h2 className="text-lg font-semibold mb-3">Stem For Good</h2>
              <p className="mb-2">
                <span className="font-medium">Website:</span> stemforgood.vn
              </p>
              <p className="mb-2">
                <span className="font-medium">Fanpage:</span>{" "}
                <a
                  href="https://www.facebook.com/stem4good.trungfounder/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.facebook.com/stem4good.trungfounder/
                </a>
              </p>
            </div>

            <div className="mb-7">
              <h2 className="text-lg font-semibold mb-3 uppercase">ĐỊA CHỈ:</h2>
              <p className="mb-2">STEM FOR GOOD</p>
              <p className="mb-2">
                <span className="font-medium">Địa chỉ:</span> Tòa nhà Viettel
                Complex 285 Cách Mạng Tháng 8, P. 12, Q.10, Tp. Hồ Chí Minh,
                Việt Nam
              </p>
            </div>

            <div className="mb-7">
              <h2 className="text-lg font-semibold mb-3 uppercase">EMAIL:</h2>
              <p className="mb-2">stem4goodvn@gmail.com</p>
            </div>
            {/* Bản đồ Google Maps */}
            <div className="mb-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.850558880022!2d106.6775082733781!3d10.778130859165692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2a698df631%3A0x5f42bac5a0e47eec!2sViettel%20Tower!5e1!3m2!1svi!2s!4v1750586288954!5m2!1svi!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border border-gray-300"
              ></iframe>
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
                  name="fullName"
                  value={formData.fullName}
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
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Số điện thoại của bạn"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="content"
                  value={formData.content}
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
                  disabled={contactMutation.isPending}
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
