"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import enamad from "@/assets/image/e-namad-min.png";
import enamadd from "@/assets/image/namad.jpg";

const accessList = [
	{ href: "/contact", label: "تماس با ما" },
	{ href: "/about", label: "درباره ما" },
	{ href: "/rules", label: "قوانین و مقررات" },
	{ href: "/products/men", label: "ساعت مردانه" },
	{ href: "/products/women", label: "ساعت زنانه" },
	{ href: "/products", label: "فروشگاه" },
];

export default function Footer() {
	return (
		<footer
			className="border-t mt-10 "
			style={{ borderColor: "var(--border)" }}
		>
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 p-6">
				<div
					className="flex flex-col gap-3 text-sm"
					style={{ color: "var(--text-secondary)" }}
				>
					<h3
						className="text-lg font-semibold"
						style={{ color: "var(--text-primary)" }}
					>
						اطلاعات تماس
					</h3>

					<div className="flex items-center gap-2">
						<Phone size={18} style={{ color: "var(--accent)" }} />
						<span>0912-123-4567</span>
					</div>

					<div className="flex items-center gap-2">
						<Mail size={18} style={{ color: "var(--accent)" }} />
						<span>info@zamira-shop.com</span>
					</div>

					<div className="flex items-center gap-2">
						<MapPin size={18} style={{ color: "var(--accent)" }} />
						<span>تهران، خیابان مثال، پلاک ۱۲۳</span>
					</div>
				</div>

				<div>
					<ul className="flex flex-col gap-3 text-sm">
						{accessList.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="
            relative
            transition
            text-(--text-primary)
            hover:text-(--accent)
            after:absolute
            after:left-0
            after:-bottom-0.5
            after:h-[2px]
            after:w-0
            after:bg-(--accent)
            after:transition-all
            after:duration-300
            hover:after:w-full
          "
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex  gap-4 items-center">
					<Image
						src={enamad}
						alt="e-namad"
						width={110}
						height={110}
						className="w-auto rounded-md"
					/>
					<Image
						src={enamadd}
						alt="samandehi"
						width={110}
						height={110}
						className="w-auto rounded-md"
					/>
				</div>
			</div>

			<p
				className=" text-center text-xs mt-8 p-2"
				style={{
					backgroundColor: "var(--muted)",
					borderColor: "var(--border)",
					color: "var(--text-secondary)",
				}}
			>
				تمام حقوق این وب سایت متعلق به فروشگاه "Zamira" می باشد.
			</p>
		</footer>
	);
}
