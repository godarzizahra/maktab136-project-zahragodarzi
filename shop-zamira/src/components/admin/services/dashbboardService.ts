import { API_BASE_URL } from "@/api/baseUrl";
import { api } from "@/api/interceptor";

export async function getDashboardStats() {
	const res = await api.get(`${API_BASE_URL}/api/admin/stats`);
	return res.data.data;
}
