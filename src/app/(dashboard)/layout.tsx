import "@/styles/globals.css";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-600">Quản trị</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block hover:text-blue-500">📊 Dashboard</Link>
          <Link href="/products" className="block hover:text-blue-500">📦 Sản phẩm</Link>
          <Link href="/users" className="block hover:text-blue-500">👤 Người dùng</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
