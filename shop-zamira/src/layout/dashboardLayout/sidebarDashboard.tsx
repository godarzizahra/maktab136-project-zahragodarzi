"use client";

import { logoutUser } from "@/api/logout";
import logo from "@/assets/image/LOGO1.png";
import {
	Boxes,
	LayoutDashboard,
	LogOut,
	Package,
	ShoppingCart,
	Store,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
	{ title: "داشبورد", href: "/admin", icon: LayoutDashboard },
	{ title: "محصولات", href: "/admin/products", icon: Package },
	{ title: "قیمت و موجودی", href: "/admin/priceInventory", icon: Boxes },
	{ title: "سفارش‌ها", href: "/admin/orders", icon: ShoppingCart },
	{ title: "کاربران", href: "/admin/users", icon: Users },
	{ title: "فروشگاه", href: "/", icon: Store },
];

export default function SidebarDashboard({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const pathname = usePathname();
	const router = useRouter();
	const handleLogout = () => {
		logoutUser();
		router.push("/admin/admin-portal/login-x92f7c");
	};

	return (
		<>
			{isOpen && (
				<div
					onClick={onClose}
					className="fixed inset-0 bg-black/60 z-40 lg:hidden"
				/>
			)}
			<aside
				className={`
                fixed top-0 right-0 z-50 h-full w-72 bg-[var(--surface)] border-l border-[var(--border)] 
                flex flex-col transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:h-full lg:rounded-2xl lg:m-2
                ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
			>
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
								onClick={() => {
									if (window.innerWidth < 1024) {
										onClose();
									}
								}}
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
		</>
	);
}
