import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;
	const role = req.cookies.get("role")?.value;
	const pathname = req.nextUrl.pathname;

	const adminLoginPath = "/admin/admin-portal/login-x92f7c";
	const userLoginPath = "/login";
	const userRegisterPath = "/register";

	const publicPaths = [adminLoginPath, userLoginPath, userRegisterPath];

	if (publicPaths.some((p) => pathname.startsWith(p))) {
		return NextResponse.next();
	}

	if (pathname.startsWith("/admin")) {
		if (!token) {
			return NextResponse.redirect(new URL(adminLoginPath, req.url));
		}

		if (role !== "admin") {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	if (pathname.startsWith("/user/dashboard")) {
		if (!token) {
			return NextResponse.redirect(new URL(userLoginPath, req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*", "/user/dashboard/:path*"],
};
