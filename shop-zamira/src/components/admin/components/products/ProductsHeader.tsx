import { Plus, Search } from "lucide-react";

export default function ProductsHeader() {
	return (
		<div className="flex items-center justify-between mb-2 px-2">
			<h1 className="text-2xl font-bold text-[var(--border)]">محصولات</h1>

			<div className="flex items-center gap-3 w-full sm:w-auto">
				<div className="relative w-full sm:w-64">
					<Search
						size={18}
						className="absolute left-3 top-2.5 text-[var(--text-secondary)]"
					/>
					<input
						type="text"
						placeholder="جستجوی محصول..."
						className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition"
					/>
				</div>

				<button className="bg-[var(--accent)] text-black px-4 py-2 rounded-lg text-sm flex items-center gap-1 hover:opacity-90 transition">
					<Plus size={20} />
					<span>افزودن</span>
				</button>
			</div>
		</div>
	);
}
