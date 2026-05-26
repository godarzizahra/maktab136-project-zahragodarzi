"use client";

import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";

import Pagination from "../../../base/pagination";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./productsTable";

export default function ProductsPageClient() {
	const { products, page, totalPages, setPage, fetchProducts } =
		useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts, page]);

	return (
		<div>
			<ProductsHeader />
			<ProductsTable />
			<Pagination
				currentPage={page}
				totalPages={totalPages}
				onPageChange={setPage}
			/>
		</div>
	);
}
