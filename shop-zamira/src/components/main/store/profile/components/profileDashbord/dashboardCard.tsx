"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
	title: string;
	icon: LucideIcon;
	href?: string;
	onClick?: () => void;
	variant?: "default" | "danger";
};

export default function DashboardCard({
	title,
	icon: Icon,
	href,
	onClick,
	variant = "default",
}: Props) {
	const baseClass =
		"flex min-h-[170px] flex-col items-center justify-center rounded-2xl border p-6 text-center transition";

	const variantClass =
		variant === "danger"
			? "border-gray-200 bg-white hover:border-red-300 hover:bg-red-50"
			: "border-gray-200 bg-white hover:border-[var(--accent)] hover:shadow-md";

	const content = (
		<>
			<Icon size={46} className="mb-4 text-slate-400" />
			<span className="text-base font-semibold text-slate-800">{title}</span>
		</>
	);

	if (href) {
		return (
			<Link href={href} className={`${baseClass} ${variantClass}`}>
				{content}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={`${baseClass} ${variantClass}`}>
			{content}
		</button>
	);
}
