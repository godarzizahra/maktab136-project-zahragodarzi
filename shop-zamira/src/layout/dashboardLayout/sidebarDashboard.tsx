"use client";

import logo from "@/assets/image/LOGO1.png";
import {
	LayoutDashboard,
	LogOut,
	Package,
	ShoppingCart,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{ title: "داشبورد", href: "/dashboard", icon: LayoutDashboard },
	{ title: "محصولات", href: "/dashboard/products", icon: Package },
	{ title: "سفارش‌ها", href: "/dashboard/orders", icon: ShoppingCart },
	{ title: "کاربران", href: "/dashboard/users", icon: Users },
];

export default function SidebarDashboard() {
	const pathname = usePathname();

	const handleLogout = () => {};

	return (
		<aside className="w-72 h-screen bg-[var(--surface)] border-l border-[var(--border)] flex flex-col rounded-2xl">
			<div className="h-20 flex flex-col items-center justify-center border-b border-[var(--border)] shrink-0">
				<Image src={logo} alt="logo" width={80} height={80} />
			</div>

			<nav className="flex-1 overflow-y-auto p-4 space-y-2">
				{menuItems.map((item) => {
					const Icon = item.icon;
					const isActive =
						pathname === item.href || pathname.startsWith(item.href + "/");

					return (
						<Link
							key={item.href}
							href={item.href}
							className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                ${
									isActive
										? "bg-[var(--background)] text-[var(--accent)] shadow-md"
										: "text-[var(--text-secondary)] hover:bg-[var(--background)] hover:text-[var(--accent)]"
								}`}
						>
							<Icon size={20} />
							<span className="text-sm font-medium">{item.title}</span>
						</Link>
					);
				})}
			</nav>

			<div className="p-4 border-t border-[var(--border)] shrink-0">
				<button
					onClick={handleLogout}
					className="w-full flex items-center justify-center gap-2 bg-[var(--background)] hover:bg-[var(--accent)] hover:text-black text-[var(--text-primary)] py-3 rounded-xl transition-all duration-300"
				>
					<LogOut size={18} />
					خروج از حساب
				</button>
			</div>
		</aside>
	);
}
