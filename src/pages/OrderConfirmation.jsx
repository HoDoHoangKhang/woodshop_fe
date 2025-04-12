// import { Link, useSearchParams } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Button from "../components/ui/Button";
// import { Helmet } from "react-helmet-async";
// import { useEffect, useState } from "react";
// import { getOrder } from "../services/api";
// import useToast from "../hooks/useToast";

// const OrderConfirmation = () => {
//     const [searchParams] = useSearchParams();
//     const orderId = searchParams.get("orderId");
//     const [order, setOrder] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const { error } = useToast();

//     useEffect(() => {
//         const fetchOrder = async () => {
//             try {
//                 const response = await getOrder(orderId);
//                 setOrder(response.data);
//             } catch (err) {
//                 error(
//                     "Không thể tải thông tin đơn hàng. Vui lòng thử lại sau!"
//                 );
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (orderId) {
//             fetchOrder();
//         }
//     }, [orderId, error]);

//     if (isLoading) {
//         return (
//             <MainLayout>
//                 <div className="container mx-auto py-12 px-4">
//                     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
//                         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#d89c4a] mx-auto"></div>
//                         <p className="mt-4 text-gray-600">
//                             Đang tải thông tin đơn hàng...
//                         </p>
//                     </div>
//                 </div>
//             </MainLayout>
//         );
//     }

//     if (!order) {
//         return (
//             <MainLayout>
//                 <div className="container mx-auto py-12 px-4">
//                     <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
//                         <h1 className="text-2xl font-bold text-gray-900 mb-4">
//                             Không tìm thấy đơn hàng
//                         </h1>
//                         <p className="text-gray-600 mb-8">
//                             Đơn hàng không tồn tại hoặc đã bị xóa.
//                         </p>
//                         <Button
//                             as={Link}
//                             to="/"
//                             className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white"
//                         >
//                             Trở về trang chủ
//                         </Button>
//                     </div>
//                 </div>
//             </MainLayout>
//         );
//     }

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString("vi-VN", {
//             day: "2-digit",
//             month: "2-digit",
//             year: "numeric",
//         });
//     };

//     const formatPrice = (price) => {
//         return new Intl.NumberFormat("vi-VN", {
//             style: "currency",
//             currency: "VND",
//         }).format(price);
//     };

//     return (
//         <MainLayout>
//             <div className="container mx-auto py-12 px-4">
//                 <Helmet>
//                     <title>Xác nhận đơn hàng - Chàng Trai Gỗ</title>
//                     <meta
//                         name="description"
//                         content="Xác nhận đơn hàng thành công - Chàng Trai Gỗ"
//                     />
//                 </Helmet>

//                 <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
//                     {/* Icon thành công */}
//                     <div className="flex justify-center mb-6">
//                         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
//                             <svg
//                                 className="w-12 h-12 text-green-500"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M5 13l4 4L19 7"
//                                 ></path>
//                             </svg>
//                         </div>
//                     </div>

//                     {/* Thông báo */}
//                     <h1 className="text-2xl font-bold text-gray-900 mb-4">
//                         Đặt hàng thành công!
//                     </h1>
//                     <p className="text-gray-600 mb-8">
//                         Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn
//                         trong thời gian sớm nhất để xác nhận đơn hàng.
//                     </p>

//                     {/* Thông tin đơn hàng */}
//                     <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
//                         <h2 className="text-lg font-semibold mb-4">
//                             Thông tin đơn hàng
//                         </h2>
//                         <div className="space-y-3">
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600">
//                                     Mã đơn hàng:
//                                 </span>
//                                 <span className="font-medium">#{order.id}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600">Ngày đặt:</span>
//                                 <span className="font-medium">
//                                     {formatDate(order.createdAt)}
//                                 </span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600">
//                                     Tổng tiền:
//                                 </span>
//                                 <span className="font-medium text-red-600">
//                                     {formatPrice(order.totalAmount)}
//                                 </span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600">
//                                     Phương thức thanh toán:
//                                 </span>
//                                 <span className="font-medium">
//                                     {order.paymentMethod === "COD"
//                                         ? "Thanh toán khi nhận hàng (COD)"
//                                         : "Chuyển khoản ngân hàng"}
//                                 </span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span className="text-gray-600">
//                                     Trạng thái:
//                                 </span>
//                                 <span className="font-medium text-green-600">
//                                     {order.status === "PENDING"
//                                         ? "Đang chờ xử lý"
//                                         : order.status === "CONFIRMED"
//                                         ? "Đã xác nhận"
//                                         : order.status === "SHIPPING"
//                                         ? "Đang giao hàng"
//                                         : order.status === "COMPLETED"
//                                         ? "Đã hoàn thành"
//                                         : "Đã hủy"}
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Các nút điều hướng */}
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                         <Button
//                             as={Link}
//                             to="/"
//                             className="bg-[#d89c4a] hover:bg-[#c88c3a] text-white"
//                         >
//                             Trở về trang chủ
//                         </Button>
//                         <Button
//                             as={Link}
//                             to="/products"
//                             variant="outline"
//                             className="border-[#d89c4a] text-[#d89c4a] hover:bg-[#d89c4a] hover:text-white"
//                         >
//                             Tiếp tục mua sắm
//                         </Button>
//                     </div>

//                     {/* Thông tin liên hệ */}
//                     <div className="mt-8 pt-8 border-t border-gray-200">
//                         <p className="text-gray-600 mb-2">
//                             Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ:
//                         </p>
//                         <div className="flex justify-center gap-4 text-sm">
//                             <a
//                                 href="tel:+84987654321"
//                                 className="text-[#d89c4a] hover:text-[#c88c3a]"
//                             >
//                                 <svg
//                                     className="w-4 h-4 inline-block mr-1"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                                     ></path>
//                                 </svg>
//                                 0987 654 321
//                             </a>
//                             <a
//                                 href="mailto:info@changtraigo.com"
//                                 className="text-[#d89c4a] hover:text-[#c88c3a]"
//                             >
//                                 <svg
//                                     className="w-4 h-4 inline-block mr-1"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                     ></path>
//                                 </svg>
//                                 info@changtraigo.com
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </MainLayout>
//     );
// };

// export default OrderConfirmation;
