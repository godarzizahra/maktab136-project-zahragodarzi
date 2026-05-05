import { API_BASE_URL } from "@/api/baseUrl";
import axios from "axios";

export async function adminLogin(payload: { email: string; password: string }) {
	const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
	return response.data;
}
