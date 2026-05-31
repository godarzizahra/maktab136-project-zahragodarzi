import { API_BASE_URL } from "@/api/baseUrl";
import { api } from "@/api/interceptor";
import { PaginatedOrdersResponse } from "../types/dashboardOrdersType";

export async function getAllOrders(
	page = 1,
	limit = 10,
	status = "all",
): Promise<PaginatedOrdersResponse> {
	const query = new URLSearchParams({
		page: String(page),
		limit: String(limit),
	});

	if (status !== "all") {
		query.append("status", status);
	}

	const res = await api.get(
		`${API_BASE_URL}/api/orders/admin/all?${query.toString()}`,
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
