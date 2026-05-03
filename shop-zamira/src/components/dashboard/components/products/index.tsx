"use client";

import { useProducts } from "@/components/dashboard/hooks/useProducts";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./productsTable";

export default function ProductsPageClient() {
	const { products, loading } = useProducts();

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<ProductsHeader />
			<ProductsTable products={products} />
		</div>
	);
}
