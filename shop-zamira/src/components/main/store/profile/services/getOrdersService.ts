import { api } from "@/api/axios";
import { OrdersResponse } from "../types/getOrdersType";

export async function getMyOrders(): Promise<OrdersResponse> {
	const { data } = await api.get<OrdersResponse>("/api/orders");
	return data;
}
