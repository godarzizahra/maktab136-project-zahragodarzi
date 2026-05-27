import { api } from "@/api/axios";
import { Cart, CartApiResponse } from "../types/cart";

type AddToCartPayload = {
	productId: string;
	quantity?: number;
};

type UpdateCartItemPayload = {
	quantity: number;
};
export async function getCart(): Promise<Cart> {
	const res = await api.get<CartApiResponse>("/api/cart");

	return res.data.data;
}

export async function addToCart(payload: AddToCartPayload): Promise<Cart> {
	const res = await api.post<CartApiResponse>("/api/cart/add", payload);
	return res.data.data;
}

export async function updateCartItem(
	itemId: string,
	payload: UpdateCartItemPayload,
): Promise<Cart> {
	const res = await api.put<CartApiResponse>(
		`/api/cart/update/${itemId}`,
		payload,
	);
	return res.data.data;
}

export async function removeCartItem(itemId: string): Promise<Cart> {
	const res = await api.delete<CartApiResponse>(`/api/cart/remove/${itemId}`);
	return res.data.data;
}

export async function clearCartServer(): Promise<Cart> {
	const res = await api.delete<CartApiResponse>("/api/cart/clear");
	return res.data.data;
}
