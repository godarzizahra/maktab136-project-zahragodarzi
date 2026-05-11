import { API_BASE_URL } from "@/api/baseUrl";
import { ProductsResponse } from "@/types/ProductsType";
import axios from "axios";

export async function getProducts(
	page = 1,
	limit = 10,
): Promise<ProductsResponse> {
	const response = await axios.get(`${API_BASE_URL}/products`, {
		params: { page, limit },
	});

	return response.data;
}
