"use client";

import { LogOut, ShieldUser, User, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type AccountMenuProps = {
	isLoggedIn: boolean;
	isAdmin?: boolean;
	onLogout?: () => void;
};

export default function AccountMenu({
	isLoggedIn,
	isAdmin = false,
	onLogout,
}: AccountMenuProps) {
	const [open, setOpen] = useState(false);

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
				<div className="absolute left-0 mt-3 w-52 rounded-2xl border bg-white shadow-lg z-50 overflow-hidden">
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
									onLogout?.();
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
