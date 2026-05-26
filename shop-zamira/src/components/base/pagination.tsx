"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange?: (page: number) => void;
	queryKey?: string;
}

type PaginationItem = number | "...";

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	queryKey = "page",
}: PaginationProps) {
	const searchParams = useSearchParams();

	const createPageLink = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set(queryKey, page.toString());
		return `?${params.toString()}`;
	};

	const getPaginationItems = (): PaginationItem[] => {
		if (totalPages <= 4) {
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

	const renderPageButton = (page: number) => {
		const isActive = Number(page) === Number(currentPage);
		const className = `w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-medium transition flex-shrink-0
		flex items-center justify-center ${
			isActive
				? "bg-[var(--accent)] text-black border-[var(--accent)]"
				: "bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--muted)]"
		}`;

		if (onPageChange) {
			return (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={className}
				>
					{page}
				</button>
			);
		}

		return (
			<Link key={page} href={createPageLink(page)} className={className}>
				{page}
			</Link>
		);
	};

	const renderPrevButton = () => {
		const prevPage = Math.max(currentPage - 1, 1);
		const disabled = currentPage === 1;
		const className = `px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
		text-[var(--text-primary)] hover:bg-[var(--muted)] text-sm sm:text-base w-full sm:w-auto text-center ${
			disabled ? "pointer-events-none opacity-40" : ""
		}`;

		if (onPageChange) {
			return (
				<button
					onClick={() => onPageChange(prevPage)}
					disabled={disabled}
					className={className}
				>
					قبلی
				</button>
			);
		}

		return (
			<Link href={createPageLink(prevPage)} className={className}>
				قبلی
			</Link>
		);
	};

	const renderNextButton = () => {
		const nextPage = Math.min(currentPage + 1, totalPages);
		const disabled = currentPage === totalPages;
		const className = `px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
		text-[var(--text-primary)] hover:bg-[var(--muted)] text-sm sm:text-base w-full sm:w-auto text-center ${
			disabled ? "pointer-events-none opacity-40" : ""
		}`;

		if (onPageChange) {
			return (
				<button
					onClick={() => onPageChange(nextPage)}
					disabled={disabled}
					className={className}
				>
					بعدی
				</button>
			);
		}

		return (
			<Link href={createPageLink(nextPage)} className={className}>
				بعدی
			</Link>
		);
	};

	if (totalPages <= 1) return null;

	return (
		<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
			{renderPrevButton()}

			<div className="flex max-w-full flex-wrap justify-center gap-2">
				{items.map((item, index) =>
					item === "..." ? (
						<span
							key={`ellipsis-${index}`}
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-sm font-medium text-[var(--text-secondary)] sm:h-10 sm:w-10"
						>
							...
						</span>
					) : (
						renderPageButton(item)
					),
				)}
			</div>

			{renderNextButton()}
		</div>
	);
}
