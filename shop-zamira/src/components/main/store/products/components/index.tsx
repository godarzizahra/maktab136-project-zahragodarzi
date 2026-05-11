"use client";

import { Product } from "@/types/ProductsType";
import { useState } from "react";

import Pagination from "@/components/base/pagination";
import { getProducts } from "@/services/productService";
import ProductsGrid from "./productsGrid";

interface Props {
	initialProducts: Product[];
	initialPage: number;
	totalPages: number;
}

export default function ProductsPageClientStore({
	initialProducts,
	initialPage,
	totalPages: initialTotalPages,
}: Props) {
	const [products, setProducts] = useState(initialProducts);
	const [page, setPage] = useState(initialPage);
	const [totalPages, setTotalPages] = useState(initialTotalPages);
	const [loading, setLoading] = useState(false);

	const handlePageChange = async (newPage: number) => {
		if (newPage < 1 || newPage > totalPages) return;

		try {
			setLoading(true);
			const res = await getProducts(newPage, 10);
			setProducts(res.data);
			setPage(res.page);
			setTotalPages(res.pages);
		} catch (error) {
			console.error("Pagination error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="space-y-8">
			{loading ? (
				<p>در حال بارگذاری...</p>
			) : (
				<ProductsGrid products={products} />
			)}

			<Pagination
				currentPage={page}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
