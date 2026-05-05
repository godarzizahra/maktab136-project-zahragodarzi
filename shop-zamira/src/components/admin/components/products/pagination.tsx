"use client";

import { PaginationProps } from "../../types/dashboardProductsType";

export default function Pagination({
	page,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) return null;

	return (
		<div className="flex items-center justify-center gap-4 mt-4">
			<button
				onClick={() => onPageChange(page - 1)}
				disabled={page === 1}
				className="px-4 py-2 rounded-lg text-[var(--text-primary)] bg-[var(--surface)] text-sm disabled:opacity-40 hover:bg-[var(--accent-hover)] transition"
			>
				قبلی
			</button>

			<span className="text-sm text-[var(--text-secondary)]">
				صفحه {page} از {totalPages}
			</span>

			<button
				onClick={() => onPageChange(page + 1)}
				disabled={page === totalPages}
				className="px-4 py-2 rounded-lg text-[var(--text-primary)] bg-[var(--surface)] text-sm disabled:opacity-40 hover:bg-[var(--accent-hover)] transition"
			>
				بعدی
			</button>
		</div>
	);
}
