"use client";

import { createQueryString } from "@/utils/queryParams";
import { SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";
import SortDropdown from "./sortDropdown";

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
		<div className="flex items-center justify-between border-b border-[var(--border)] py-4 mb-2">
			<h1 className="text-2xl font-bold text-[var(--text-primary)]">محصولات</h1>

			<div className="flex items-center gap-4">
				<SortDropdown
					currentSort={currentSort}
					handleSortChange={handleSortChange}
				/>

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
