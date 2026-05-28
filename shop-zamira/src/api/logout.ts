import { deleteCookie } from "cookies-next";

// export function logoutUser() {
// 	const role = getCookie("role");

// 	deleteCookie("access_token", { path: "/" });
// 	deleteCookie("refresh_token", { path: "/" });
// 	deleteCookie("role", { path: "/" });

// 	if (typeof window !== "undefined") {
// 		if (role === "admin") {
// 			window.location.href = "/";
// 		} else {
// 			window.location.href = "/";
// 		}
// 	}
// }
export function logoutUser() {
	deleteCookie("access_token", { path: "/" });
	deleteCookie("refresh_token", { path: "/" });
	deleteCookie("role", { path: "/" });
	localStorage.removeItem("redirect_after_login");

	// تغییر از "/" به "/login"
	window.location.href = "/";
}
