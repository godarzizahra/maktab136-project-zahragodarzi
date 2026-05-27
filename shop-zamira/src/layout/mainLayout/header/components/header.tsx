"use client";

import LOGO1 from "@/assets/image/LOGO1.png";
import ThemeToggle from "@/components/base/themeToggle";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AccountMenu from "./accountMenu";
import MiniCart from "./miniCart";

const navLinks = [
	{ href: "/products", label: "فروشگاه" },
	{ href: "/men", label: "ساعت مردانه" },
	{ href: "/women", label: "ساعت زنانه" },
	{ href: "/brands", label: "برندها" },
];

const brandLinks = [
	{ href: "/products", label: "Rolex" },
	{ href: "/", label: "Casio" },
	{ href: "/", label: "Omega" },
	{ href: "/", label: "Citizen" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [mobileBrandOpen, setMobileBrandOpen] = useState(false);

	const navItem =
		"relative py-2 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full";

	return (
		<header
			className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 py-1 border-b"
			style={{
				backgroundColor: "var(--surface)",
				borderColor: "var(--border)",
			}}
		>
			{/* Right Side */}
			<div className="flex items-center gap-3">
				{/* Mobile Menu Button */}
				<button
					className="md:hidden"
					onClick={() => setOpen(!open)}
					aria-label="باز و بسته کردن منو"
					aria-expanded={open}
				>
					{open ? <X size={26} /> : <Menu size={26} />}
				</button>

				{/* Logo */}
				<Link href="/" className="flex items-center p-1">
					<Image src={LOGO1} alt="logo" width={80} height={45} priority />
				</Link>
			</div>

			{/* Desktop Navigation */}
			<nav className="hidden md:block">
				<ul className="flex items-center gap-8">
					{navLinks.map((item) =>
						item.href !== "/brands" ? (
							<li key={item.href}>
								<Link
									href={item.href}
									className={navItem}
									style={{ color: "var(--text-primary)" }}
								>
									{item.label}
								</Link>
							</li>
						) : (
							<li key="brands" className="relative group">
								<button
									className={`${navItem} flex items-center`}
									style={{ color: "var(--text-primary)" }}
								>
									برندها
								</button>

								<div className="absolute top-full left-0 h-3 w-full"></div>

								<div
									className="absolute left-0 top-full mt-2 opacity-0 invisible 
									group-hover:visible group-hover:opacity-100 
									transition-all duration-200 rounded-md shadow-lg min-w-[180px]"
									style={{
										backgroundColor: "var(--surface)",
										border: "1px solid var(--border)",
									}}
								>
									{brandLinks.map((brand) => (
										<Link
											key={brand.label}
											href={brand.href}
											className="block px-4 py-2 transition-all duration-200 hover:bg-(--border) hover:text-(--accent)"
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

			{/* Left Side Icons */}
			<div className="flex items-center gap-4">
				<button
					className="hover:text-[var(--accent)] transition"
					aria-label="جستجو"
				>
					<Search size={24} />
				</button>
				<AccountMenu />

				<MiniCart />

				<ThemeToggle />
			</div>

			{/* Mobile Menu */}
			{open && (
				<div
					className=" absolute top-full left-0 w-full flex flex-col gap-4 px-6 py-6 md:hidden"
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
								onClick={() => setOpen(false)}
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
									onClick={() => setMobileBrandOpen(!mobileBrandOpen)}
								>
									برندها
								</button>

								{mobileBrandOpen && (
									<div className="flex flex-col pr-4">
										{brandLinks.map((brand) => (
											<Link
												key={brand.label}
												href={brand.href}
												className="py-2 border-b"
												style={{
													color: "var(--text-primary)",
													borderColor: "var(--border)",
												}}
												onClick={() => setOpen(false)}
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
