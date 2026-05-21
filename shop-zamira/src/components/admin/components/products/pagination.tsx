"use client";

interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	page,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-10">
			<button
				onClick={() => onPageChange(page - 1)}
				disabled={page === 1}
				className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
				text-[var(--text-primary)] hover:bg-[var(--muted)] disabled:opacity-40 text-sm sm:text-base"
			>
				قبلی
			</button>

			<div className="flex flex-wrap justify-center gap-2">
				{pages.map((p) => (
					<button
						key={p}
						onClick={() => onPageChange(p)}
						className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-medium transition
						${
							p === page
								? "bg-[var(--accent)] text-black border-[var(--accent)]"
								: "bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--muted)]"
						}`}
					>
						{p}
					</button>
				))}
			</div>

			<button
				onClick={() => onPageChange(page + 1)}
				disabled={page === totalPages}
				className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)]
				text-[var(--text-primary)] hover:bg-[var(--muted)] disabled:opacity-40 text-sm sm:text-base"
			>
				بعدی
			</button>
		</div>
	);
}
