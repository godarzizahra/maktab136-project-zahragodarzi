import ProductsGridSkeleton from "@/components/main/store/products/components/productsGridSkeleton";

export default function Loading() {
	return (
		<section className="container py-8">
			<ProductsGridSkeleton />
		</section>
	);
}
