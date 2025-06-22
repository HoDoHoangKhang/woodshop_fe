import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/ui/Button";
import { useCart } from "../context/CartContext";
import useToast from "../hooks/useToast";
import { config } from "../config/env";
import { placeOrder } from "../services/api";
import { usePlaceOrder } from "../hooks/orders/use-place-order";

const Checkout = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const { cartItems, totalItems, totalAmount } = useCart();
  const { success, error } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    ward: "",
    notes: "",
    paymentMethod: "CASH_ON_DELIVERY", // Mặc định là thanh toán khi nhận hàng
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const placeOrderMutation = usePlaceOrder({
    mutationConfig: {
      onSuccess: (data) => {
        success("Đặt hàng thành công!");
        navigate(`/order-confirmation?code=${data.data?.order?.code}`);
      },
      onError: () => {
        error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau!");
      },
    },
  });

  // Fetch tỉnh/thành phố
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch("https://provinces.open-api.vn/api/p/");
        const data = await response.json();
        // Sắp xếp tỉnh theo thứ tự A-Z
        const sortedProvinces = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setProvinces(sortedProvinces);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh/thành:", error);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedProvince) {
        try {
          const province = provinces.find((p) => p.name === selectedProvince);
          if (province) {
            const response = await fetch(
              `https://provinces.open-api.vn/api/p/${province.code}?depth=2`
            );
            const data = await response.json();
            // Sắp xếp quận/huyện theo thứ tự A-Z
            const sortedDistricts = data.districts.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            setDistricts(sortedDistricts);
            setWards([]);
            setFormData((prev) => ({
              ...prev,
              district: "",
              ward: "",
            }));
          }
        } catch (error) {
          console.error("Lỗi khi lấy danh sách quận/huyện:", error);
        }
      }
    };
    fetchDistricts();
  }, [selectedProvince, provinces]);

  // Fetch phường/xã khi chọn quận/huyện
  useEffect(() => {
    const fetchWards = async () => {
      if (selectedDistrict) {
        try {
          const district = districts.find((d) => d.name === selectedDistrict);
          if (district) {
            const response = await fetch(
              `https://provinces.open-api.vn/api/d/${district.code}?depth=2`
            );
            const data = await response.json();
            // Sắp xếp phường/xã theo thứ tự A-Z
            const sortedWards = data.wards.sort((a, b) =>
              a.name.localeCompare(b.name)
            );
            setWards(sortedWards);
            setFormData((prev) => ({
              ...prev,
              ward: "",
            }));
          }
        } catch (error) {
          console.error("Lỗi khi lấy danh sách phường/xã:", error);
        }
      }
    };
    fetchWards();
  }, [selectedDistrict, districts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "province") {
      setSelectedProvince(value);
    } else if (name === "district") {
      setSelectedDistrict(value);
    }
  };

  const handleDiscountCode = () => {
    // Mô phỏng kiểm tra mã giảm giá (trong dự án thực sẽ gọi API)
    if (discountCode === "GIAMGIA100K") {
      setDiscount(100000);
    } else if (discountCode === "GIAMGIA50K") {
      setDiscount(50000);
    } else {
      setDiscount(0);
      error("Mã giảm giá không hợp lệ!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra thông tin bắt buộc
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.address ||
      !formData.province ||
      !formData.district ||
      !formData.ward
    ) {
      error("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    // Chuẩn bị dữ liệu đặt hàng
    const orderData = {
      email: formData.email,
      fullName: formData.fullName,
      phoneNumber: formData.phone,
      paymentMethod:
        formData.paymentMethod === "CASH_ON_DELIVERY"
          ? "CASH_ON_DELIVERY"
          : "BANKING",
      address: {
        province: formData.province,
        district: formData.district,
        ward: formData.ward,
        detail: formData.address,
      },
      products: cartItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    placeOrderMutation.mutate(orderData);
  };

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="text-center py-12 bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4">Thanh toán</h1>
          <div className="flex justify-center mb-6">
            <svg
              className="w-24 h-24 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <p className="text-gray-500 mb-6">
            Bạn cần thêm sản phẩm vào giỏ hàng trước khi thanh toán.
          </p>
          <Button
            as={Link}
            to="/products"
            className="bg-[#d89c4a] hover:bg-[#c88c3a]"
          >
            Tiếp tục mua sắm
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        <Helmet>
          <title>Thanh toán - Chàng Trai Gỗ</title>
          <meta
            name="description"
            content="Thanh toán đơn hàng - Chàng Trai Gỗ"
          />
        </Helmet>

        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            Trang chủ
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <Link to="/cart" className="text-gray-500 hover:text-gray-700">
            Giỏ hàng
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-900">Thanh toán</span>
        </nav>

        <h1 className="text-2xl font-bold mb-6 uppercase border-b border-gray-200 pb-2">
          THANH TOÁN
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Thông tin thanh toán */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Thông tin thanh toán</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="fullName"
                    >
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="address">
                    Địa chỉ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="province"
                    >
                      Tỉnh/Thành phố <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                      required
                    >
                      <option value="">Chọn tỉnh/thành</option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.name}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="district"
                    >
                      Quận/Huyện <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                      required
                    >
                      <option value="">Chọn quận/huyện</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="ward">
                      Phường/Xã <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="ward"
                      name="ward"
                      value={formData.ward}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a]"
                      required
                    >
                      <option value="">Chọn phường/xã</option>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.name}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="notes">
                    Ghi chú đơn hàng
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#d89c4a] resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Phương thức thanh toán */}
              <div className="bg-white rounded shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">
                  Phương thức thanh toán
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="payment-cod"
                      name="paymentMethod"
                      value="CASH_ON_DELIVERY"
                      className="mr-2"
                      checked={formData.paymentMethod === "CASH_ON_DELIVERY"}
                      onChange={handleChange}
                    />
                    <label htmlFor="payment-cod" className="flex items-center">
                      <svg
                        className="w-8 h-8 mr-2 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <span>Thanh toán khi nhận hàng (COD)</span>
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="payment-bank"
                      name="paymentMethod"
                      value="BANKING"
                      className="mr-2"
                      checked={formData.paymentMethod === "BANKING"}
                      onChange={handleChange}
                    />
                    <label htmlFor="payment-bank" className="flex items-center">
                      <svg
                        className="w-8 h-8 mr-2 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        ></path>
                      </svg>
                      <span>Chuyển khoản qua ngân hàng</span>
                    </label>
                  </div>

                  {formData.paymentMethod === "BANKING" && (
                    <div className="ml-6 p-4 bg-gray-50 rounded">
                      <p className="mb-2">
                        <strong>Thông tin chuyển khoản:</strong>
                      </p>
                      <p>Ngân hàng: Vietcombank</p>
                      <p>Số tài khoản: 0123456789</p>
                      <p>Chủ tài khoản: CÔNG TY TNHH CHÀNG TRAI GỖ</p>
                      <p className="mt-2 text-sm text-gray-600">
                        Nội dung chuyển khoản: [Họ tên] - [Số điện thoại]
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tóm tắt đơn hàng */}
            <div>
              <div className="bg-white rounded shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Thông tin đơn hàng</h2>

                <div className="border-b pb-4 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between py-2">
                      <div className="flex items-start">
                        <div className="pr-2 text-gray-700">
                          {item.title}
                          <span className="text-sm text-gray-500 ml-1">
                            × {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="font-medium">
                        {(item.price * item.quantity).toFixed(2)}₫
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Tạm tính:</span>
                    <span>{totalAmount.toFixed(2)}₫</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Phí ship:</span>
                    <span>—</span>
                  </div>

                  <div className="flex mb-2">
                    <input
                      type="text"
                      placeholder="Mã giảm giá"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#d89c4a] rounded-l"
                    />
                    <button
                      type="button"
                      onClick={handleDiscountCode}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-r"
                    >
                      Sử dụng
                    </button>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Giảm giá:</span>
                      <span>-{discount.toFixed(2)}₫</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Tổng tiền:</span>
                  <span className="text-red-600">
                    {(totalAmount - discount > 0
                      ? totalAmount - discount
                      : 0
                    ).toFixed(2)}
                    ₫
                  </span>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-[#d89c4a] hover:bg-[#c88c3a] text-white py-3 px-6 rounded-md"
                  >
                    Đặt hàng
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Bằng cách đặt hàng, bạn đồng ý với
                  <Link
                    to="/terms"
                    className="text-[#d89c4a] hover:underline ml-1"
                  >
                    điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link
                    to="/privacy"
                    className="text-[#d89c4a] hover:underline"
                  >
                    chính sách bảo mật
                  </Link>{" "}
                  của chúng tôi.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Checkout;
