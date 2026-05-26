import { Product } from "@/components/admin/types/ProductsType";
import { PackageSearch } from "lucide-react";
import ProductCard from "./productscard";

interface ProductsGridProps {
	products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
	if (!products || products.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-16 text-center h-screen">
				<PackageSearch className="w-16 h-16 text-gray-400 mb-4" />

				<h2 className="text-lg font-semibold text-gray-700">محصولی یافت نشد</h2>

				<p className="mt-2 text-sm text-gray-500">
					لطفاً فیلترها را تغییر دهید.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	);
}
