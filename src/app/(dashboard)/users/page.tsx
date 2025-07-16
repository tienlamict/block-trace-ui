"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchUsers, ApiUserResponse, User } from "../../lib/api";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadUsers = async (page: number) => {
    try {
      const data: ApiUserResponse = await fetchUsers(page);
      setUsers(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Lỗi khi tải người dùng:", error);
    }
  };

  useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Quản lý người dùng</h1>
        <Link
          href="/users/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Thêm người dùng
        </Link>
      </div>

      <table className="min-w-full bg-white rounded shadow overflow-hidden text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Tên</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Vai trò</th>
            <th className="py-2 px-4 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <Link
                  href={`/users/${user.id}/edit`}
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

      {/* Phân trang */}
      <div className="mt-4 flex justify-center items-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          ⬅️ Trước
        </button>
        <span>
          Trang {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          Tiếp ➡️
        </button>
      </div>
    </div>
  );
}
