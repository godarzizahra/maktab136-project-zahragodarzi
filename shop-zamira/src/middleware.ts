import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;
	const role = req.cookies.get("role")?.value;
	const pathname = req.nextUrl.pathname;

	const adminLoginPath = "/admin/admin-portal/login-x92f7c";
	const userLoginPath = "/login";
	const userRegisterPath = "/register";

	const userProtectedPaths = [
		"/profile",
		"/checkout",
		"/orders",
		"/wishlist",
		"/user/dashboard",
	];

	const isUserProtectedRoute = userProtectedPaths.some(
		(path) => pathname === path || pathname.startsWith(`${path}/`),
	);

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

		return NextResponse.next();
	}

	// user protected routes
	if (isUserProtectedRoute) {
		if (!token) {
			return NextResponse.redirect(new URL(userLoginPath, req.url));
		}

		if (role !== "user") {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/admin/:path*",
		"/user/dashboard/:path*",
		"/profile/:path*",
		"/checkout/:path*",
		"/orders/:path*",
		"/wishlist/:path*",
		"/login",
		"/register",
		"/admin/admin-portal/login-x92f7c",
	],
};
