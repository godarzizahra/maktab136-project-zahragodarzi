"use client";

import { X } from "lucide-react";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";
import ProductFilters from "./productFilters";

export default function FiltersDrawer() {
	const { isOpen, closeDrawer } = useFiltersDrawer();

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 md:hidden">
			<div onClick={closeDrawer} className="absolute inset-0 bg-black/40" />

			<div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[var(--surface)] border-l border-[var(--border)] p-6 overflow-y-auto">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-lg font-semibold text-[var(--text-primary)]">
						فیلترها
					</h3>
					<button
						onClick={closeDrawer}
						className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
					>
						<X />
					</button>
				</div>

				<ProductFilters />
			</div>
		</div>
	);
}
