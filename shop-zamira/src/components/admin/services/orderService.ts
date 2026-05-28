import { API_BASE_URL } from "@/api/baseUrl";
import { api } from "@/api/interceptor";
import { PaginatedOrdersResponse } from "../types/dashboardOrdersType";

export async function getAllOrders(
	page = 1,
	limit = 10,
): Promise<PaginatedOrdersResponse> {
	const res = await api.get(
		`${API_BASE_URL}/api/orders/admin/all?page=${page}&limit=${limit}`,
	);

	return res.data;
}
export async function updateOrderStatus(
	id: string,
	status: string,
): Promise<void> {
	await api.put(`${API_BASE_URL}/api/orders/${id}/status`, {
		status,
	});
}
