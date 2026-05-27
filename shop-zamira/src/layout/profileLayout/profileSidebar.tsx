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
		<div className="rounded-2xl border border-gray-200 bg-white px-4 py-7 shadow-sm w-70">
			<h2 className="mb-4 border-b pb-3 text-lg font-bold text-[#1e293b] ">
				حساب من
			</h2>

			<nav className="flex flex-col gap-2">
				{menuItems.map((item) => {
					const isActive = pathname === item.href;
					const Icon = item.icon;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={clsx(
								"rounded-xl px-4 py-3 text-sm font-medium transition flex gap-2",
								isActive
									? "bg-gray-100 text-[var(--accent)]"
									: "text-gray-700 hover:bg-gray-50",
							)}
						>
							<Icon size={20} className="mb-4 text-gray-400" />

							<span>{item.label}</span>
						</Link>
					);
				})}

				<button
					onClick={logoutUser}
					className="flex gap-2 rounded-xl px-4 py-3 text-right text-sm font-medium text-[var(--accent)] transition hover:bg-red-50"
				>
					<LogOut />
					<span>خروج از حساب کاربری</span>
				</button>
			</nav>
		</div>
	);
}
