"use client";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-10">
			{/* دکمه قبلی */}
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] 
				text-[var(--text-primary)] hover:bg-[var(--muted)] disabled:opacity-40 text-sm sm:text-base w-full sm:w-auto"
			>
				قبلی
			</button>

			{/* دکمه‌های صفحات */}
			<div className="flex flex-wrap justify-center gap-2 max-w-full">
				{pages.map((page) => (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border text-sm font-medium transition flex-shrink-0
						${
							page === currentPage
								? "bg-[var(--accent)] text-black border-[var(--accent)]"
								: "bg-[var(--surface)] border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--muted)]"
						}`}
					>
						{page}
					</button>
				))}
			</div>

			{/* دکمه بعدی */}
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] 
				text-[var(--text-primary)] hover:bg-[var(--muted)] disabled:opacity-40 text-sm sm:text-base w-full sm:w-auto"
			>
				بعدی
			</button>
		</div>
	);
}
