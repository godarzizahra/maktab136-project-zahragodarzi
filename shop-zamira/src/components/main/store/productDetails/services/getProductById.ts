import { API_BASE_URL } from "@/api/baseUrl";
import { Product } from "@/components/admin/types/ProductsType";

import axios from "axios";

export async function getProductById(id: string): Promise<Product | null> {
	try {
		const res = await axios.get(`${API_BASE_URL}/api/products/${id}`);

		return res.data.product || res.data.data || res.data;
	} catch (error: any) {
		if (error.response?.status === 404) {
			return null;
		}

		throw error;
	}
}
