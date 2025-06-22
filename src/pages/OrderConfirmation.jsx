import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useGetOrderByCode } from "../hooks/orders/use-get-order-by-code";
import useToast from "../hooks/useToast";
import MainLayout from "../layouts/MainLayout";

const OrderConfirmation = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");

  const { data: order, isLoading } = useGetOrderByCode({
    code,
  });

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#d89c4a] mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thông tin đơn hàng...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!order) {
    return (
      <MainLayout>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Không tìm thấy đơn hàng
            </h1>
            <p className="text-gray-600 mb-8">
              Đơn hàng không tồn tại hoặc đã bị xóa.
            </p>
            <Button
              as={Link}
              to="/"
              className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white"
            >
              Trở về trang chủ
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <Helmet>
          <title>Xác nhận đơn hàng - Chàng Trai Gỗ</title>
          <meta
            name="description"
            content="Xác nhận đơn hàng thành công - Chàng Trai Gỗ"
          />
        </Helmet>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          {/* Icon thành công */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>

          {/* Thông báo */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Đặt hàng thành công!
          </h1>
          <p className="text-gray-600 mb-8">
            Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn trong thời gian
            sớm nhất để xác nhận đơn hàng.
          </p>

          {/* Thông tin đơn hàng */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold mb-4">Thông tin đơn hàng</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Mã đơn hàng:</span>
                <span className="font-medium">#{order.data.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ngày đặt:</span>
                <span className="font-medium">
                  {formatDate(order.data.createdAt)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng tiền:</span>
                <span className="font-medium text-red-600">
                  {formatPrice(order.data.totalPrice)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phương thức thanh toán:</span>
                <span className="font-medium">
                  {order.data.paymentMethod === "CASH_ON_DELIVERY"
                    ? "Thanh toán khi nhận hàng (COD)"
                    : "Chuyển khoản ngân hàng"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Trạng thái:</span>
                <span className="font-medium text-green-600">
                  {order.data.orderStatus === "PENDING"
                    ? "Đang chờ xử lý"
                    : order.data.orderStatus === "CONFIRMED"
                    ? "Đã xác nhận"
                    : order.data.orderStatus === "SHIPPING"
                    ? "Đang giao hàng"
                    : order.data.orderStatus === "COMPLETED"
                    ? "Đã hoàn thành"
                    : "Đã hủy"}
                </span>
              </div>
            </div>
          </div>

          {/* Các nút điều hướng */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              to="/"
              className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white"
            >
              Trở về trang chủ
            </Button>
            <Button
              as={Link}
              to="/products"
              variant="outline"
              className="border-[#d89c4a] text-[#d89c4a] hover:bg-[#d89c4a] hover:text-white"
            >
              Tiếp tục mua sắm
            </Button>
          </div>

          {/* Thông tin liên hệ */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">
              Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ:
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a
                href="mailto:stem4goodvn@gmail.com"
                className="text-[#d89c4a] hover:text-[#c88c3a]"
              >
                <svg
                  className="w-4 h-4 inline-block mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                stem4goodvn@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderConfirmation;
