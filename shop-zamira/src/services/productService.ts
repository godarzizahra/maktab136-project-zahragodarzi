import { API_BASE_URL } from "@/api/baseUrl";
import axios from "axios";

export async function getProducts(page = 1, limit = 10) {
	const response = await axios.get(`${API_BASE_URL}/products`, {
		params: { page, limit },
	});
	return response.data;
}
