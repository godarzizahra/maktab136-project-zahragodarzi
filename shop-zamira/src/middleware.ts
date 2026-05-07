import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;
	const role = req.cookies.get("role")?.value;
	const pathname = req.nextUrl.pathname;

	const adminLoginPath = "/admin/admin-portal/login-x92f7c";
	const userLoginPath = "/login";
	const userRegisterPath = "/register";

	// جلوگیری از دیدن auth توسط کاربر لاگین شده

	if (pathname === userLoginPath || pathname === userRegisterPath) {
		if (token && role === "admin") {
			return NextResponse.redirect(new URL("/admin", req.url));
		}

		if (token && role === "user") {
			return NextResponse.redirect(new URL("/", req.url));
		}

		return NextResponse.next();
	}

	// admin login page

	if (pathname === adminLoginPath) {
		if (token && role === "admin") {
			return NextResponse.redirect(new URL("/admin", req.url));
		}

		return NextResponse.next();
	}

	// admin panel protection

	if (pathname.startsWith("/admin")) {
		if (!token) {
			return NextResponse.redirect(new URL(adminLoginPath, req.url));
		}

		if (role !== "admin") {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	// user dashboard protection

	if (pathname.startsWith("/user/dashboard")) {
		if (!token) {
			return NextResponse.redirect(new URL(userLoginPath, req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/admin/:path*",
		"/user/dashboard/:path*",
		"/login",
		"/register",
		"/admin/admin-portal/login-x92f7c",
	],
};
