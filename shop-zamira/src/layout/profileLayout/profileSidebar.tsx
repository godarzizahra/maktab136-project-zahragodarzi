"use client";

import { logoutUser } from "@/api/logout";
import clsx from "clsx";
import {
	FileText,
	Heart,
	LayoutDashboard,
	LogOut,
	MapPin,
	UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{ label: "پیشخوان", href: "/profile", icon: LayoutDashboard },
	{ label: "سفارش ها", href: "/profile/orders", icon: FileText },
	{ label: "آدرس", href: "/profile/address", icon: MapPin },
	{
		label: "اطلاعات حساب کاربری",
		href: "/profile/account-details",
		icon: UserCircle,
	},
	{ label: "علاقه مندی", href: "/profile/favorites", icon: Heart },
];

export default function ProfileSidebar() {
	const pathname = usePathname();

	return (
		<div className="w-full rounded-2xl bg-white p-5 shadow-sm">
			<h2 className="mb-4 border-b border-gray-100 pb-3 text-right text-lg font-bold text-slate-800">
				حساب من
			</h2>

			<nav className="flex flex-col gap-1">
				{menuItems.map((item) => {
					const isActive = pathname === item.href;
					const Icon = item.icon;

					return (
						<Link
							key={item.href}
							href={item.href}
							className={clsx(
								"flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
								isActive
									? "bg-amber-50 text-[var(--accent)]"
									: "text-slate-700 hover:bg-gray-50",
							)}
						>
							<span>{item.label}</span>
							<Icon
								size={18}
								className={isActive ? "text-[var(--accent)]" : "text-slate-400"}
							/>
						</Link>
					);
				})}

				<button
					onClick={logoutUser}
					className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[var(--accent)] transition hover:bg-red-50"
				>
					<span>خروج از حساب کاربری</span>
					<LogOut size={18} />
				</button>
			</nav>
		</div>
	);
}
