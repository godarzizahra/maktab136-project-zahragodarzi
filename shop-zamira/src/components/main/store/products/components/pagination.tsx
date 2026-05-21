"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
}

type PaginationItem = number | "...";

export default function Pagination({
	currentPage,
	totalPages,
}: PaginationProps) {
	const searchParams = useSearchParams();

	const createPageLink = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		return `?${params.toString()}`;
	};

	const getPaginationItems = (): PaginationItem[] => {
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		}

		if (currentPage <= 3) {
			return [1, 2, 3, 4, "...", totalPages];
		}

		if (currentPage >= totalPages - 2) {
			return [
				1,
				"...",
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			];
		}

		return [
			1,
			"...",
			currentPage - 1,
			currentPage,
			currentPage + 1,
			"...",
			totalPages,
		];
	};

	const items = getPaginationItems();

	return (
		<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-10">
			<Link
				href={createPageLink(Math.max(currentPage - 1, 1))}
				className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
				text-[var(--text-primary)] hover:bg-[var(--muted)] text-sm sm:text-base w-full sm:w-auto text-center
				${currentPage === 1 ? "pointer-events-none opacity-40" : ""}`}
			>
				قبلی
			</Link>

			<div className="flex flex-wrap justify-center gap-2 max-w-full">
				{items.map((item, index) =>
					item === "..." ? (
						<span
							key={`ellipsis-${index}`}
							className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-transparent text-sm font-medium
							flex items-center justify-center text-[var(--text-secondary)]"
						>
							...
						</span>
					) : (
						<Link
							key={item}
							href={createPageLink(item)}
							className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-medium transition flex-shrink-0
							flex items-center justify-center
							${
								Number(item) === Number(currentPage)
									? "bg-[var(--accent)] text-black border-[var(--accent)]"
									: "bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--muted)]"
							}`}
						>
							{item}
						</Link>
					),
				)}
			</div>

			<Link
				href={createPageLink(Math.min(currentPage + 1, totalPages))}
				className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
				text-[var(--text-primary)] hover:bg-[var(--muted)] text-sm sm:text-base w-full sm:w-auto text-center
				${currentPage === totalPages ? "pointer-events-none opacity-40" : ""}`}
			>
				بعدی
			</Link>
		</div>
	);
}
