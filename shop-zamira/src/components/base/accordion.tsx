"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionProps = {
	title: string;
	children: React.ReactNode;
	defaultOpen?: boolean;
};

export default function Accordion({
	title,
	children,
	defaultOpen = false,
}: AccordionProps) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<div className="border-b border-[var(--border)] pb-4">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex w-full items-center justify-between text-sm font-bold"
			>
				<span>{title}</span>
				<ChevronDown
					className={`transition-transform ${open ? "rotate-180" : ""}`}
				/>
			</button>

			<div
				className={`grid transition-all duration-300 ${
					open
						? "grid-rows-[1fr] opacity-100 mt-4"
						: "grid-rows-[0fr] opacity-0"
				}`}
			>
				<div className="overflow-hidden">{children}</div>
			</div>
		</div>
	);
}
