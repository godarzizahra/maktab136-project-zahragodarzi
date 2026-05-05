import { API_BASE_URL } from "@/api/baseUrl";
import axios from "axios";
import { RegisterSchemaType } from "../schemas/register.schema";

export const registerUser = async (data: RegisterSchemaType) => {
	const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
	return res.data;
};

export const loginUser = async (data: any) => {
	const res = await axios.post(`${API_BASE_URL}/auth/login`, data);
	return res.data;
};
