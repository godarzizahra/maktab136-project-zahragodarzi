import ProductFilters from "./productFilters";

export default function FiltersSidebar() {
	return (
		<aside className="hidden md:block col-span-4 lg:col-span-3">
			<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
				<h3 className="font-semibold text-lg mb-6">فیلترها</h3>
				<ProductFilters />
			</div>
		</aside>
	);
}
