"use client";

import logo from "@/assets/image/logo-2.jpg";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ href: "/products", label: "فروشگاه" },
	{ href: "/men", label: "ساعت مردانه" },
	{ href: "/women", label: "ساعت زنانه" },
	{ href: "/brands", label: "برندها" },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header
			className="flex items-center justify-between px-6 py-1 border-b"
			style={{
				backgroundColor: "var(--surface)",
				borderColor: "var(--border)",
			}}
		>
			<Link href="/" className="flex items-center">
				<Image src={logo} alt="logo" width={90} height={55} />
			</Link>

			<nav className="hidden md:block">
				<ul className="flex items-center gap-6">
					{navLinks.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className="transition-colors"
								style={{ color: "var(--text-primary)" }}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<Search size={22} style={{ color: "var(--text-primary)" }} />
				<User size={22} style={{ color: "var(--text-primary)" }} />
				<ShoppingCart size={22} style={{ color: "var(--text-primary)" }} />

				<button className="md:hidden" onClick={() => setOpen(!open)}>
					{open ? (
						<X size={26} style={{ color: "var(--text-primary)" }} />
					) : (
						<Menu size={26} style={{ color: "var(--text-primary)" }} />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{open && (
				<div
					className="absolute top-20 left-0 w-full flex flex-col gap-4 px-6 py-6 md:hidden"
					style={{ backgroundColor: "var(--surface)" }}
				>
					{navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="py-2 border-b"
							style={{
								color: "var(--text-primary)",
								borderColor: "var(--border)",
							}}
						>
							{item.label}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
