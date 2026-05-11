"use client";

import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";
import { createQueryString } from "@/utils/queryParams";

export default function ProductsHeader() {
	const { openDrawer } = useFiltersDrawer();

	const router = useRouter();
	const searchParams = useSearchParams();

	const currentSort = searchParams.get("sort") || "newest";

	const handleSortChange = (value: string) => {
		const query = createQueryString(searchParams, {
			sort: value,
			page: "1",
		});

		router.push(`/products?${query}`);
	};

	return (
		<div className="flex items-center justify-between border-b border-[var(--border)] py-4">
			<h1 className="text-2xl font-bold text-[var(--text-primary)]">محصولات</h1>

			<div className="flex items-center gap-4">
				<select
					value={currentSort}
					onChange={(e) => handleSortChange(e.target.value)}
					className="hidden md:block border border-[var(--border)] bg-[var(--surface)] px-5 py-2 rounded-lg text-sm"
				>
					<option value="newest">جدیدترین</option>
					<option value="cheap">ارزان‌ترین</option>
					<option value="expensive">گران‌ترین</option>
				</select>

				<button
					onClick={openDrawer}
					className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]"
				>
					<SlidersHorizontal size={18} />
					فیلتر
				</button>
			</div>
		</div>
	);
}
