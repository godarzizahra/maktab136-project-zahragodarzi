import { api } from "@/api/axios";
import { API_BASE_URL } from "@/api/baseUrl";
import { Order } from "../types/dashboardOrdersType";

export async function getAllOrders(): Promise<Order[]> {
	const res = await api.get(`${API_BASE_URL}/orders/admin/all`);

	console.log("ORDERS API:", res.data);

	return res.data.data || [];
}
