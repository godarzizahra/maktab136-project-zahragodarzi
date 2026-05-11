"use client";

import { SlidersHorizontal } from "lucide-react";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";

export default function ProductsHeader() {
	const { openDrawer } = useFiltersDrawer();

	return (
		<div className="flex items-center justify-between border-b border-[var(--border)] py-4">
			<h1 className="text-2xl font-bold text-[var(--text-primary)]">محصولات</h1>

			<div className="flex items-center gap-4 ">
				{/* sort */}
				<select className="hidden md:block border border-[var(--border)] bg-[var(--surface)] px-5 py-2 rounded-lg text-sm">
					<option>جدیدترین</option>
					<option>ارزان‌ترین</option>
					<option>گران‌ترین</option>
				</select>

				{/* mobile filter button */}
				<button
					onClick={openDrawer}
					className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
				>
					<SlidersHorizontal size={18} />
					فیلتر
				</button>
			</div>
		</div>
	);
}
