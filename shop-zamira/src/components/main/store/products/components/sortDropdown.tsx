"use client";

import { useState } from "react";

type SortDropdownProps = {
	currentSort: string;
	handleSortChange: (value: string) => void;
};

const options = [
	{ value: "new", label: "مرتب سازی پیش فرض" },
	{ value: "newest", label: "مرتب سازی براساس جدیدترین" },
	{ value: "cheap", label: "مرتب سازی براساس ارزان‌ترین" },
	{ value: "expensive", label: "مرتب سازی بر اساس گران‌ترین" },
];

export default function SortDropdown({
	currentSort,
	handleSortChange,
}: SortDropdownProps) {
	const [open, setOpen] = useState(false);

	const selected =
		options.find((o) => o.value === currentSort)?.label || options[0].label;

	return (
		<div className="relative hidden md:block w-56">
			<button
				onClick={() => setOpen(!open)}
				className="
    w-full flex items-center justify-between
    border border-[var(--border)]
    bg-[var(--surface)]
    text-[var(--text-primary)]
    px-4 py-2 rounded-lg text-sm
    whitespace-nowrap
    overflow-hidden
    text-ellipsis
  "
			>
				{selected}

				<svg
					className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M5.5 7.5L10 12l4.5-4.5" />
				</svg>
			</button>

			{open && (
				<div className="absolute left-0 mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-lg overflow-hidden z-50">
					{options.map((option) => (
						<div
							key={option.value}
							onClick={() => {
								handleSortChange(option.value);
								setOpen(false);
							}}
							className="px-4 py-2 text-sm text-[var(--text-primary)] cursor-pointer transition-colors hover:bg-[var(--muted)]"
						>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
