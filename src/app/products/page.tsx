import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Quản lý sản phẩm</h1>
        <Link
          href="/products/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Thêm sản phẩm
        </Link>
      </div>

      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4 text-left">Mã sản phẩm</th>
            <th className="py-2 px-4 text-left">Tên sản phẩm</th>
            <th className="py-2 px-4 text-left">Lô sản xuất</th>
            <th className="py-2 px-4 text-left">Giá</th>
            <th className="py-2 px-4 text-left">Trạng thái</th>
            <th className="py-2 px-4 text-left">Địa điểm cập nhật</th>
            <th className="py-2 px-4 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Sản phẩm A</td>
            <td className="py-2 px-4">Lô 001</td>
            <td className="py-2 px-4">100.000đ</td>
            <td className="py-2 px-4">Còn hàng</td>
            <td className="py-2 px-4">Kho A</td>
            <td className="py-2 px-4">
              <Link href="/products/1/edit" className="text-blue-500 hover:underline mr-3">
                ✏️ Sửa
              </Link>
              <button className="text-red-500 hover:underline">🗑️ Xoá</button>
            </td>
          </tr>
          {/* Thêm các dòng sản phẩm khác tại đây */}
        </tbody>
      </table>
    </div>
  );
}
