import { api } from "@/api/axios";

export type CreateOrderPayload = {
	shippingAddress: {
		name: string;
		phone: string;
		address: string;
	};
	paymentMethod: "online" | "cash" | string;
};

export async function createOrder(payload: CreateOrderPayload) {
	const { data } = await api.post("/api/orders", payload);
	return data;
}
