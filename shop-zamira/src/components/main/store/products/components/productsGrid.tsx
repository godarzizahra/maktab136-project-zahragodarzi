import { Product } from "@/types/ProductsType";
import ProductCard from "./productsCard";

interface ProductsGridProps {
	products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
	if (!products || products.length === 0) {
		return (
			<div className="text-center py-20 text-[var(--text-secondary)]">
				محصولی یافت نشد
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
