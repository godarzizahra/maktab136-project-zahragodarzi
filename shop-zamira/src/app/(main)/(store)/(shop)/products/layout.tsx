import FiltersDrawer from "@/components/main/store/products/components/filtersDrawer";
import FiltersSidebar from "@/components/main/store/products/components/filtersSidebar";
import ProductsHeader from "@/components/main/store/products/components/productsHeader";

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="max-w-7xl mx-auto px-4 py-10 mt-10">
			<ProductsHeader />
			<FiltersDrawer />
			<div className="grid grid-cols-12 gap-8">
				<div className="hidden lg:block lg:col-span-3">
					<FiltersSidebar />
				</div>

				<div className="col-span-12 lg:col-span-9">{children}</div>
			</div>
		</section>
	);
}
