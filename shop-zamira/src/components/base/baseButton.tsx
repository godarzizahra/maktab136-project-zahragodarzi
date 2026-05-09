import Link from "next/link";
import React from "react";

interface BaseButtonProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

export default function BaseButton({
	href,
	children,
	className = "",
}: BaseButtonProps) {
	return (
		<Link
			href={href}
			className={`
        inline-flex items-center justify-center
        px-6 py-3
        rounded-lg
        bg-[var(--accent)]
        text-[var(--text-primary)]
        hover:bg-[var(--accent-hover)]
        transition-all duration-300
        font-medium
        ${className}
      `}
		>
			{children}
		</Link>
	);
}
