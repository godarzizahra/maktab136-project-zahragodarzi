import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("admin_token");
	const pathname = request.nextUrl.pathname;

	// ✅ اگر صفحه لاگین است، اجازه بده رد شود
	if (pathname === "/admin/admin-portal/login-x92f7c") {
		return NextResponse.next();
	}

	if (!token && pathname.startsWith("/admin")) {
		return NextResponse.redirect(
			new URL("/admin/admin-portal/login-x92f7c", request.url),
		);
	}

	return NextResponse.next();
}
