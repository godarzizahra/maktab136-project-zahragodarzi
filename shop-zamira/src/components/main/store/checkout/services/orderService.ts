import { api } from "@/api/interceptor";

export type CreateOrderPayload = {
	shippingAddress: {
		name: string;
		phone: string;
		address: string;
	};
	paymentMethod: "online" | "cash" | string;
};

export type OrderData = {
	_id: string;
	totalPrice?: number;
	finalPrice?: number;
	payablePrice?: number;
};

export type GetOrderByIdResponse = {
	success: boolean;
	data: OrderData;
};

export async function createOrder(payload: CreateOrderPayload) {
	const { data } = await api.post("/api/orders", payload);
	return data;
}

export async function getOrderById(
	orderId: string,
): Promise<GetOrderByIdResponse> {
	const { data } = await api.get(`/api/orders/${orderId}`);
	return data;
}
