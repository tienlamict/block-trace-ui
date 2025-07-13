export async function login(username: string, password: string): Promise<boolean> {
  // Ở đây bạn có thể gọi API backend thật sự
  if (username === "admin" && password === "123456") {
    // Giả lập lưu token
    localStorage.setItem("token", "fake-token");
    return true;
  }
  return false;
}
