"use client";

import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";
import Pagination from "./pagination";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./productsTable";

export default function ProductsPageClient() {
	const { products, page, totalPages, setPage, fetchProducts } =
		useProductStore();

	// بارگیری اطلاعات در مانت اولیه
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return (
		<div>
			<ProductsHeader />
			<ProductsTable />
			<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
		</div>
	);
}
