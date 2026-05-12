import { API_BASE_URL } from "@/api/baseUrl";
import { Product } from "@/types/ProductsType";
import axios from "axios";

export async function getProductById(id: string): Promise<Product | null> {
	try {
		const res = await axios.get(`${API_BASE_URL}/api/products/${id}`);
		// console.log("STATUS:", res.status);
		// console.log(res.data);

		return res.data.product || res.data.data || res.data;
	} catch (error: any) {
		if (error.response?.status === 404) {
			return null;
		}

		throw error;
	}
}
