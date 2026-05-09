import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export function useProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const data = await getProducts(page, 10);
				setProducts(data.data);
				setPage(data.page);
				setTotalPages(data.pages);
				// console.log("API Response:", data);
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
