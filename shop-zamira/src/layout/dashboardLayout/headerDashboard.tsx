"use client";

import { User } from "lucide-react";

export default function HeaderDashboard() {
	return (
		<header className="h-20 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 rounded-2xl">
			<div className="flex flex-col">
				<h1 className="text-lg font-semibold text-[var(--text-primary)]">
					پنل مدیریت
				</h1>
				<span className="text-xs text-[var(--text-secondary)]">
					فروشگاه ساعت زامیرا
				</span>
			</div>

			<div className="flex items-center gap-3 cursor-pointer group">
				<div className="text-right hidden sm:flex flex-col">
					<span className="text-sm font-medium text-[var(--text-primary)]">
						خوش آمدید ادمین عزیز
					</span>
				</div>

				<User
					size={22}
					className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition"
				/>
			</div>
		</header>
	);
}
