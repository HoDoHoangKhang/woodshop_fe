import { useState } from "react";
import useAuthentication from "../stores/use-authentication";
import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Icons
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";

const Profile = () => {
    const { isAuthenticated, user } = useAuthentication((state) => state);
    const [activeTab, setActiveTab] = useState("profile");

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

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
                                    <div className="text-center py-8 text-[#9e9181]">
                                        Bạn chưa có đơn hàng nào
                                    </div>
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
