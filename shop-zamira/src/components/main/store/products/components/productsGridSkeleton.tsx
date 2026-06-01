import ProductCardSkeleton from "./productCardSkeleton";

export default function ProductsGridSkeleton() {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{Array.from({ length: 8 }).map((_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</div>
	);
}
