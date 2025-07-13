"use client";
import Link from "next/link";
import  "@/styles/globals.css";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-blue-600">Quản trị</h2>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block text-gray-700 hover:text-blue-500">
            📊 Dashboard
          </Link>
          <Link href="/users" className="block text-gray-700 hover:text-blue-500">
            👤 Người dùng
          </Link>
          <Link href="/products" className="block text-gray-700 hover:text-blue-500">
            📦 Sản phẩm
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="mt-4 text-red-500 hover:underline"
          >
            Đăng xuất
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
