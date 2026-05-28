import { api } from "@/api/interceptor";
import { getCookie } from "cookies-next";
import { ProductFormData } from "../schema/modalProductSchema";

api.interceptors.request.use((config) => {
	const token = getCookie("access_token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export async function getProducts(page = 1, limit = 10, search = "") {
	const response = await api.get(`/api/products`, {
		params: { page, limit, search },
	});
	return response.data;
}

export async function createProduct(data: ProductFormData) {
	const res = await api.post(`/api/products`, data);
	return res.data;
}

export async function updateProduct(
	id: string | number,
	data: Partial<ProductFormData>,
) {
	const res = await api.put(`/api/products/${id}`, data);
	return res.data;
}

export async function deleteProduct(id: string | number) {
	const res = await api.delete(`/api/products/${id}`);
	return res.data;
}
