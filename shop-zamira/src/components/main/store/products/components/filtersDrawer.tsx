"use client";

import { X } from "lucide-react";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";
import ProductFilters from "./productFilters";

export default function FiltersDrawer() {
	const { isOpen, closeDrawer } = useFiltersDrawer();

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 lg:hidden">
			<div onClick={closeDrawer} className="absolute inset-0 bg-black/40" />

			<div className="absolute right-0 top-0 flex h-dvh w-80 max-w-[85vw] flex-col bg-[var(--surface)] border-l border-[var(--border)]">
				<div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
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

				<div className="flex-1 overflow-y-auto p-6">
					<ProductFilters />
				</div>
			</div>
		</div>
	);
}
