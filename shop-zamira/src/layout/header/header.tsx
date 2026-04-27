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

const brandLinks = [
	{ href: "/", label: "Rolex" },
	{ href: "/", label: "Casio" },
	{ href: "/", label: "Omega" },
	{ href: "/", label: "Citizen" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [brandOpen, setBrandOpen] = useState(false);

	return (
		<header
			className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-1 border-b"
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
					{navLinks.map((item) =>
						item.href !== "/brands" ? (
							<li key={item.href}>
								<Link href={item.href} style={{ color: "var(--text-primary)" }}>
									{item.label}
								</Link>
							</li>
						) : (
							<li key="brands" className="relative group">
								<button style={{ color: "var(--text-primary)" }}>برندها</button>

								<div
									className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white dark:bg-neutral-900 shadow-md rounded-md p-3 min-w-[150px]"
									style={{
										backgroundColor: "var(--surface)",
										border: "1px solid var(--border)",
									}}
								>
									{brandLinks.map((brand) => (
										<Link
											key={brand.href}
											href={brand.href}
											className="block px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition"
											style={{ color: "var(--text-primary)" }}
										>
											{brand.label}
										</Link>
									))}
								</div>
							</li>
						),
					)}
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

			{open && (
				<div
					className="absolute top-20 left-0 w-full flex flex-col gap-4 px-6 py-6 md:hidden"
					style={{ backgroundColor: "var(--surface)" }}
				>
					{navLinks.map((item) =>
						item.href !== "/brands" ? (
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
						) : (
							<div key="brands" className="flex flex-col">
								<button
									className="py-2 border-b text-right"
									style={{
										color: "var(--text-primary)",
										borderColor: "var(--border)",
									}}
									onClick={() => setBrandOpen(!brandOpen)}
								>
									برندها
								</button>

								{brandOpen && (
									<div className="flex flex-col pr-4">
										{brandLinks.map((brand) => (
											<Link
												key={brand.href}
												href={brand.href}
												className="py-2 border-b"
												style={{
													color: "var(--text-primary)",
													borderColor: "var(--border)",
												}}
											>
												{brand.label}
											</Link>
										))}
									</div>
								)}
							</div>
						),
					)}
				</div>
			)}
		</header>
	);
}
