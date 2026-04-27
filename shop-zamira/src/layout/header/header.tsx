import logo from "@/assets/image/logo-2.jpg";
import { Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ href: "/products", label: "فروشگاه" },
	{ href: "/men", label: "ساعت مردانه" },
	{ href: "/women", label: "ساعت زنانه" },
	{ href: "/brands", label: "برندها" },
];

export default function Header() {
	return (
		<header className="flex items-center justify-between px-5 py-4 shadow-sm">
			<Link href="/" className="flex items-center">
				<Image src={logo} alt="logo" width={100} height={60} />
			</Link>

			<nav>
				<ul className="flex items-center gap-6 text-sm font-medium">
					{navLinks.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className=" text-xl hover:text-blue-600 transition-colors"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="flex items-center gap-4">
				<button aria-label="جستجو">
					<Search size={22} className="hover:text-blue-600 transition-colors" />
				</button>
				<button aria-label="حساب کاربری">
					<User size={22} className="hover:text-blue-600 transition-colors" />
				</button>
				<button aria-label="سبد خرید">
					<ShoppingCart
						size={22}
						className="hover:text-blue-600 transition-colors"
					/>
				</button>
			</div>
		</header>
	);
}
