"use client";

import { LogOut, ShieldUser, User, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { logoutUser } from "@/api/logout";

export default function AccountMenu() {
	const [open, setOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const token = getCookie("access_token");
		const role = getCookie("role");

		setIsLoggedIn(!!token);
		setIsAdmin(role === "admin");
	}, []);

	return (
		<div className="relative">
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="hover:text-[var(--accent)] transition"
				aria-label="حساب کاربری"
			>
				<User size={24} />
			</button>

			{open && (
				<div className="absolute left-0 top-4 mt-3 z-50 w-52 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
					{!isLoggedIn ? (
						<div className="py-2">
							<Link
								href="/login"
								className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
								onClick={() => setOpen(false)}
							>
								<UserCircle2 size={18} />
								<span>ورود / ثبت‌نام کاربر</span>
							</Link>

							<Link
								href="/admin/admin-portal/login-x92f7c"
								className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
								onClick={() => setOpen(false)}
							>
								<ShieldUser size={18} />
								<span>ورود ادمین</span>
							</Link>
						</div>
					) : (
						<div className="py-2">
							<Link
								href={isAdmin ? "/admin" : "/profile"}
								className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-100"
								onClick={() => setOpen(false)}
							>
								<UserCircle2 size={18} />
								<span>{isAdmin ? "پنل ادمین" : "پروفایل"}</span>
							</Link>

							<button
								onClick={() => {
									setOpen(false);
									logoutUser();
								}}
								className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50"
							>
								<LogOut size={18} />
								<span>خروج از حساب</span>
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
