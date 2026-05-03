import { API_BASE_URL } from "@/api/baseUrl";
import axios from "axios";

export async function getProducts() {
	const response = await axios.get(`${API_BASE_URL}/products`);
	return response.data;
}
