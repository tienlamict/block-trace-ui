
export interface Product {
  product_id: string;
  product_name: string;
  category: string;
  description: string;
  created_at: string;
  updated_at: string;
  ipfs_hash: string;
  status: string;
  location: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface ApiUserResponse {
  data: User[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8090/api/products/get-products", {
    cache: "no-store", // nếu dùng App Router (force fresh)
  });

  if (!res.ok) {
    throw new Error("Không thể lấy danh sách sản phẩm");
  }

  const data = await res.json();
  return data;
}

export async function fetchUsers(page: number, pageSize = 5): Promise<ApiUserResponse> {
  const res = await fetch(`http://localhost:8090/api/actors/get-actors?page=${page}&pageSize=${pageSize}`);
  if (!res.ok) {
    throw new Error("Không thể tải danh sách người dùng");
  }
  return await res.json();
}