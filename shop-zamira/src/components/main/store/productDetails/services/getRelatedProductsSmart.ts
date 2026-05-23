import { API_BASE_URL } from "@/api/baseUrl";
import { Product } from "@/components/admin/types/ProductsType";
import axios from "axios";

export async function getRelatedProductsSmart(
	currentProduct: Product,
	limit: number = 10,
): Promise<Product[]> {
	try {
		const res = await axios.get(`${API_BASE_URL}/api/products`);
		const allProducts: Product[] = res.data.data || [];

		const others = allProducts.filter((p) => p._id !== currentProduct._id);

		const exactMatches = others.filter(
			(p) =>
				p.brand === currentProduct.brand &&
				p.category === currentProduct.category,
		);

		const brandMatches = others.filter(
			(p) => p.brand === currentProduct.brand && !exactMatches.includes(p),
		);

		const categoryMatches = others.filter(
			(p) =>
				p.category === currentProduct.category &&
				!exactMatches.includes(p) &&
				!brandMatches.includes(p),
		);

		const remaining = others.filter(
			(p) =>
				!exactMatches.includes(p) &&
				!brandMatches.includes(p) &&
				!categoryMatches.includes(p),
		);

		let result = [
			...exactMatches,
			...brandMatches,
			...categoryMatches,
			...remaining,
		];

		return result.slice(0, limit);
	} catch (error) {
		console.error("!!! ERROR in getRelatedProductsSmart:", error);
		return [];
	}
}
