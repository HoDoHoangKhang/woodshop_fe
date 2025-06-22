import { useState } from "react";
import useAuthentication from "../stores/use-authentication";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useGetMyOrders } from "../hooks/orders/use-get-myorders";

// Icons
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { config } from "../config/env";

const Profile = () => {
  const { isAuthenticated, user } = useAuthentication((state) => state);
  const [activeTab, setActiveTab] = useState("profile");
  const { data: ordersData } = useGetMyOrders();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "CONFIRMED":
        return "bg-blue-100 text-blue-800";
      case "DELIVERED":
        return "bg-green-100 text-green-800";
      case "CANCELLED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "PENDING":
        return "Đang chờ xử lý";
      case "CONFIRMED":
        return "Đã xác nhận";
      case "DELIVERED":
        return "Đã giao hàng";
      case "CANCELLED":
        return "Đã hủy";
      default:
        return status;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-[#302924] mb-8">
            Thông tin tài khoản
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#d89c4a] flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                      {user?.fullName?.[0] || "U"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#302924]">
                      {user?.fullName || "Người dùng"}
                    </h3>
                    <p className="text-sm text-[#9e9181]">
                      {user?.email || "Chưa có email"}
                    </p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "profile"
                        ? "bg-[#d89c4a] text-white"
                        : "text-[#9e9181] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <IoPersonOutline className="text-lg" />
                    Thông tin cá nhân
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors ${
                      activeTab === "orders"
                        ? "bg-[#d89c4a] text-white"
                        : "text-[#9e9181] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    <IoBagHandleOutline className="text-lg" />
                    Đơn hàng của tôi
                  </button>
                </nav>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {activeTab === "profile" && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-[#302924] mb-6">
                    Thông tin cá nhân
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#9e9181] mb-1">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        value={user?.fullName || ""}
                        className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#9e9181] mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user?.email || ""}
                        className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#9e9181] mb-1">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        value={user?.phone || ""}
                        className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#9e9181] mb-1">
                        Địa chỉ
                      </label>
                      <textarea
                        value={user?.address || ""}
                        className="w-full px-4 py-2 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d89c4a] focus:border-transparent"
                        rows="3"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-[#302924] mb-6">
                    Đơn hàng của tôi
                  </h2>
                  {ordersData?.data?.length > 0 ? (
                    <div className="space-y-6">
                      {ordersData.data.map((order) => (
                        <div
                          key={order.id}
                          className="border border-[#ccc] rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-sm text-gray-500">
                                Mã đơn hàng: {order.code}
                              </p>
                              <p className="text-sm text-gray-500">
                                Ngày đặt: {formatDate(order.createdAt)}
                              </p>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                order.orderStatus
                              )}`}
                            >
                              {getStatusText(order.orderStatus)}
                            </span>
                          </div>

                          <div className="space-y-3">
                            {order.orderDetails.map((detail) => (
                              <div
                                key={detail.id}
                                className="flex items-center gap-4 p-2 bg-gray-50 rounded"
                              >
                                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                                  {detail.product?.primaryImage ? (
                                    <img
                                      src={`${config.BACKEND_URL}${detail.product.primaryImage?.url}`}
                                      alt={detail?.product?.name}
                                      className="w-full h-full object-cover rounded"
                                    />
                                  ) : (
                                    <span className="text-gray-400">
                                      No image
                                    </span>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium">
                                    {detail?.product?.name}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {formatCurrency(detail.price)} x{" "}
                                    {detail.quantity}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">
                                    {formatCurrency(
                                      detail.price * detail.quantity
                                    )}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 pt-4 border-t border-[#ccc] flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-500">
                                Tổng tiền:
                              </p>
                              <p className="text-lg font-semibold text-[#302924]">
                                {formatCurrency(order.totalPrice)}
                              </p>
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.isPaid ? (
                                <span className="text-green-600">
                                  Đã thanh toán
                                </span>
                              ) : (
                                <span className="text-red-600">
                                  Chưa thanh toán
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-[#9e9181]">
                      Bạn chưa có đơn hàng nào
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
