import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { API_BASE_URL } from "./baseUrl";

export const api = axios.create({
	baseURL: API_BASE_URL,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
	if (config.url !== "/auth/refresh-token") {
		const token = getCookie("access_token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
	}
	return config;
});

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
	(res) => res,
	async (error) => {
		const originalRequest = error.config;

		// ۱. اگر خطای ۴۰۱ است و هنوز رفرش نکردیم
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const refreshToken = getCookie("refresh_token");

				if (!refreshToken) throw new Error("No refresh token found");

				// فراخوانی رفرش توکن
				const res = await axios.post(`${API_BASE_URL}/api/auth/refresh-token`, {
					refreshToken: refreshToken,
				});

				// ۲. اینجا ممکن است آدرسِ توکن در پاسخ متفاوت باشد
				const newAccessToken = res.data.data?.token || res.data.token;

				setCookie("access_token", newAccessToken, { path: "/" });

				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
				return api(originalRequest); // ارسال دوباره درخواست اصلی
			} catch (refreshError: any) {
				logoutUser(); // فقط اگر رفرش واقعاً شکست خورد لاگ‌اوت کن
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	},
);

// تابع کمکی برای لاگ‌اوت
function logoutUser() {
	const role = getCookie("role");

	deleteCookie("access_token");
	deleteCookie("refresh_token");
	deleteCookie("role");

	if (typeof window !== "undefined") {
		if (role === "admin") {
			window.location.href = "/admin/admin-portal/login-x92f7c";
		} else {
			window.location.href = "/login";
		}
	}
}
