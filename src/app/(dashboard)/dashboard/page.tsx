export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Bảng điều khiển</h1>
      <p className="text-gray-700">Chào mừng bạn đến hệ thống quản trị.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800">Người dùng</h2>
          <p className="text-gray-500">Quản lý tài khoản người dùng.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800">Sản phẩm</h2>
          <p className="text-gray-500">Quản lý danh sách sản phẩm.</p>
        </div>
      </div>
    </div>
  );
}
