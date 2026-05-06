"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function PriceInventoryHeader() {
	return (
		<div className="mb-4 flex flex-col gap-3 rounded-xl  p-1">
			<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
				<h1 className="text-2xl font-bold text-[var(--border)]">
					قیمت و موجودی
				</h1>

				<div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
					<div className="relative w-full sm:w-72">
						<Search
							size={18}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
						/>
						<input
							type="text"
							placeholder="جستجوی محصول..."
							className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] py-2 pl-9 pr-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<button className="flex items-center justify-center gap-2 rounded-lg border   px-4 py-2 text-sm text-[var(--text-primary)] transition bg-[var(--muted)]">
						<SlidersHorizontal size={18} />
						<span>فیلتر</span>
					</button>
				</div>
			</div>
		</div>
	);
}
