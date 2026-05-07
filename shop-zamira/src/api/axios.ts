import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { API_BASE_URL } from "./baseUrl";

export const api = axios.create({
	baseURL: API_BASE_URL,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
	const token = getCookie("access_token");

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
	(res) => res,
	async (err) => {
		const original = err.config;

		if (err.response?.status === 401 && !original._retry) {
			original._retry = true;

			try {
				const refresh = getCookie("refresh_token");

				const res = await axios.post(`${API_BASE_URL}/auth/refresh-token`, {
					refreshToken: refresh,
				});

				const newAccess = res.data.data.token;
				const newRefresh = res.data.data.refreshToken;

				setCookie("access_token", newAccess, { path: "/" });
				setCookie("refresh_token", newRefresh, { path: "/" });

				return api(original);
			} catch (e) {
				deleteCookie("access_token");
				deleteCookie("refresh_token");
				deleteCookie("role");

				if (typeof window !== "undefined") {
					window.location.href = "/login";
				}

				return Promise.reject(e);
			}
		}

		return Promise.reject(err);
	},
);
