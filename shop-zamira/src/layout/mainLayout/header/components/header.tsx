"use client";

import LOGO1 from "@/assets/image/LOGO1.png";
import ThemeToggle from "@/components/base/themeToggle";
import { brands } from "@/components/main/store/home/constants/brandsData";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AccountMenu from "./accountMenu";
import MiniCart from "./miniCart";
import MobileMenu from "./mobileMenu";

export const navLinks = [
	{ href: "/products", label: "فروشگاه" },
	{ href: "/products?gender=men&page=1", label: "ساعت مردانه" },
	{ href: "/products?gender=women&page=1", label: "ساعت زنانه" },
	{ href: "/brands", label: "برندها" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [brandsOpen, setBrandsOpen] = useState(false);

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
							<li
								key="brands"
								className="relative"
								onMouseEnter={() => setBrandsOpen(true)}
								onMouseLeave={() => setBrandsOpen(false)}
							>
								<button
									type="button"
									onClick={() => setBrandsOpen((prev) => !prev)}
									className={`${navItem} flex items-center gap-1`}
									style={{ color: "var(--text-primary)" }}
								>
									برندها▾
								</button>

								<div
									className={`fixed top-[72px] left-1/2 -translate-x-1/2 mt-2
		w-[96vw] rounded-2xl shadow-xl px-6 md:px-8 py-6
		transition-all duration-300 z-[999]
		${brandsOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2"}`}
									style={{
										backgroundColor: "var(--surface)",
										border: "1px solid var(--border)",
									}}
								>
									<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
										{brands.map((brand) => (
											<Link
												key={brand.id}
												href={`/products?brand=${brand.value}&page=1`}
												onClick={() => setBrandsOpen(false)}
												className="flex items-center justify-center rounded-xl border p-4 h-[100px] md:h-[110px]
					transition-all duration-200 hover:shadow-md hover:-translate-y-1"
												style={{
													borderColor: "var(--border)",
													backgroundColor: "var(--surface)",
												}}
											>
												<Image
													src={brand.logo}
													alt={brand.name}
													className="max-h-[50px] md:max-h-[60px] w-auto object-contain"
												/>
											</Link>
										))}
									</div>
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
			<MobileMenu open={open} setOpen={setOpen} />
		</header>
	);
}
