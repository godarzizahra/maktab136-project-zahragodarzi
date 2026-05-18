import { api } from "@/api/axios";
import { API_BASE_URL } from "@/api/baseUrl";
import { Order } from "../types/dashboardOrdersType";

export async function getAllOrders(): Promise<Order[]> {
	const res = await api.get(`${API_BASE_URL}/api/orders/admin/all`);

	return res.data.data || [];
}
export async function updateOrderStatus(
	id: string,
	status: string,
): Promise<void> {
	await api.patch(`${API_BASE_URL}/api/orders/${id}/status`, {
		status,
	});
}
