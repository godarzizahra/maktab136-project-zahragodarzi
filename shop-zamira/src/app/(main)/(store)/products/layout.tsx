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

			<div className="grid grid-cols-12 gap-8">
				<div className="col-span-12 md:col-span-3">
					<FiltersSidebar />
				</div>

				<div className="col-span-12 md:col-span-9">{children}</div>
			</div>
		</section>
	);
}
