import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

function Profile() {
  // Dữ liệu tĩnh ban đầu
  const initialUserData = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "123 Đường Láng, Hà Nội",
    avatar: "/images/anhdan,jpg",
  };

  const [user, setUser] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: initialUserData.name,
    email: initialUserData.email,
    phone: initialUserData.phone,
    address: initialUserData.address,
    avatar: initialUserData.avatar,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cập nhật dữ liệu người dùng (trong state)
    setUser(formData);
    setIsEditing(false);
    alert('Cập nhật thông tin thành công!');
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 
      bg-[url('/images/background2.jpg')] bg-cover bg-center ">
        <div className="max-w-4xl mx-auto py-10 px-4" >
            
            <div className="bg-white shadow-lg rounded-lg p-6 ">
            <h1 className="text-3xl font-bold text-center mb-8">Hồ Sơ Của Bạn</h1>
            {/* Ảnh đại diện */}
            <div className="flex justify-center mb-6">
                <img
                src="/images/STEM4GOOD_LOGO.png"
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                />
            </div>

            {/* Thông tin người dùng */}
            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tên</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                    Hủy
                    </button>
                    <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                    Lưu
                    </button>
                </div>
                </form>
            ) : (
                <div className="space-y-4">
                <div>
                    <p className="text-sm font-medium text-gray-700">Tên:</p>
                    <p className="text-lg">{user.name}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-700">Email:</p>
                    <p className="text-lg">{user.email}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-700">Số điện thoại:</p>
                    <p className="text-lg">{user.phone || 'Chưa cập nhật'}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-700">Địa chỉ:</p>
                    <p className="text-lg">{user.address || 'Chưa cập nhật'}</p>
                </div>
                <div className="flex justify-end">
                    <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                    Chỉnh sửa
                    </button>
                </div>
                </div>
            )}
            </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Profile;