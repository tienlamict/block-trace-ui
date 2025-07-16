import Link from "next/link";
import { fetchProducts } from "../../lib/api";

export default async function ProductsPage() {
  const products = await fetchProducts();

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

      <table className="min-w-full bg-white rounded shadow overflow-hidden text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Tên sản phẩm</th>
            <th className="py-2 px-4 text-left">Mô tả</th>
            <th className="py-2 px-4 text-left">Trạng thái</th>
            <th className="py-2 px-4 text-left">Vị trí cập nhật</th>
            <th className="py-2 px-4 text-left">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product_id} className="border-t">
              <td className="py-2 px-4">{product.product_id}</td>
              <td className="py-2 px-4">{product.product_name}</td>
              <td className="py-2 px-4">{product.description || "..."}</td>
              <td className="py-2 px-4">{product.status || "..."}</td>
              <td className="py-2 px-4">{product.location || "..."}</td>
              <td className="py-2 px-4">
                <Link
                  href={`/products/${product.product_id}/edit`}
                  className="text-blue-500 hover:underline mr-3"
                >
                  ✏️ Sửa
                </Link>
                <button className="text-red-500 hover:underline">🗑️ Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
