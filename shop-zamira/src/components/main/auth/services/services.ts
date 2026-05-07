import { api } from "@/api/axios";
import { setCookie } from "cookies-next";
import { LoginSchemaType } from "../schemas/login.schema";
import { RegisterSchemaType } from "../schemas/register.schema";

export const registerUser = async (data: RegisterSchemaType) => {
	const res = await api.post("/auth/register", data);
	return res.data;
};

export const loginUser = async (data: LoginSchemaType) => {
	const res = await api.post("/auth/login", data);

	const { token, refreshToken, user } = res.data.data;

	setCookie("access_token", token, { path: "/" });
	setCookie("refresh_token", refreshToken, { path: "/" });
	setCookie("role", user?.role, { path: "/" });

	return res.data;
};
