import { deleteCookie, setCookie } from "cookies-next";

import { api } from "@/api/axios";
import { API_BASE_URL } from "@/api/baseUrl";

export async function adminLogin(payload: { email: string; password: string }) {
	const response = await api.post(`${API_BASE_URL}/auth/login`, payload);
	const { token, refreshToken, user } = response.data.data;

	setCookie("access_token", token, { path: "/" });
	setCookie("refresh_token", refreshToken, { path: "/" });
	setCookie("role", user?.role, { path: "/" });

	return user;
}

export function logout() {
	deleteCookie("access_token", { path: "/" });
	deleteCookie("refresh_token", { path: "/" });
	deleteCookie("role", { path: "/" });

	if (typeof window !== "undefined") {
		window.location.href = "/login";
	}
}
