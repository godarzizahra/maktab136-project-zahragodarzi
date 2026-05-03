import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export function useProducts() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getProducts();
				setProducts(data.data);
				// console.log("API Response:", data);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return { products, loading };
}
