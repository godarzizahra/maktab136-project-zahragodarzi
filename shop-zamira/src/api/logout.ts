import { deleteCookie, getCookie } from "cookies-next";

export function logoutUser() {
	const role = getCookie("role");

	deleteCookie("access_token", { path: "/" });
	deleteCookie("refresh_token", { path: "/" });
	deleteCookie("role", { path: "/" });

	if (typeof window !== "undefined") {
		if (role === "admin") {
			window.location.href = "/admin/admin-portal/login-x92f7c";
		} else {
			window.location.href = "/login";
		}
	}
}
