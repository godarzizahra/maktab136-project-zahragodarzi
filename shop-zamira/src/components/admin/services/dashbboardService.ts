import { api } from "@/api/axios";
import { API_BASE_URL } from "@/api/baseUrl";

export async function getDashboardStats() {
	const res = await api.get(`${API_BASE_URL}/api/admin/stats`);
	return res.data.data;
}
