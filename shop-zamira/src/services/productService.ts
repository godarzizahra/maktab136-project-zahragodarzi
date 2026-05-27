import { API_BASE_URL } from "@/api/baseUrl";
import { ProductsResponse } from "@/components/admin/types/ProductsType";
import axios from "axios";

type GetProductsParams = {
	page?: number;
	limit?: number;
	sort?: string;
	brand?: string;
	category?: string;
	minPrice?: string;
	maxPrice?: string;
	gender?: String;
};

export async function getProducts({
	page = 1,
	limit = 10,
	sort,
	brand,
	category,
	minPrice,
	maxPrice,
	gender,
}: GetProductsParams = {}): Promise<ProductsResponse> {
	const response = await axios.get(`${API_BASE_URL}/api/products`, {
		params: {
			page,
			limit,
			sort,
			brand,
			category,
			minPrice,
			maxPrice,
			gender,
		},
	});

	return response.data;
}
