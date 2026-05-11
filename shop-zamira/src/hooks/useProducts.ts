"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "@/types/ProductsType";

export function useProducts(initialPage = 1) {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(initialPage);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);

				const res = await getProducts(page, 10);

				setProducts(res.data);
				setTotalPages(res.pages);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [page]);

	return { products, loading, page, totalPages, setPage };
}
