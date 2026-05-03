"use client";

import { useProducts } from "@/components/dashboard/hooks/useProducts";
import Pagination from "./Pagination";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./productsTable";

export default function ProductsPageClient() {
	const { products, loading, page, totalPages, setPage } = useProducts();

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<ProductsHeader />
			<ProductsTable products={products} />
			<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
		</div>
	);
}
