import { API_BASE_URL } from "@/api/baseUrl";
import { Product } from "@/components/admin/types/ProductsType";
import axios from "axios";

export async function getRelatedProductsByCategory(
	categoryInput: string | string[],
): Promise<Product[]> {
	try {
		const res = await axios.get(`${API_BASE_URL}/api/products`);
		const allProducts = res.data.data || [];

		const rawInput = Array.isArray(categoryInput)
			? categoryInput[0]
			: categoryInput;
		const targetCategories = rawInput.split(",").map((c) => c.trim());

		console.log("Looking for categories:", targetCategories);

		return allProducts.filter((product: Product) => {
			const rawCat = product.category;

			let productCategories: string[] = [];

			if (Array.isArray(rawCat)) {
				rawCat.forEach((item) => {
					const splitted = String(item)
						.split(",")
						.map((c) => c.trim());
					productCategories.push(...splitted);
				});
			} else {
				productCategories = String(rawCat)
					.split(",")
					.map((c) => c.trim());
			}

			const isMatch = productCategories.some((cat) =>
				targetCategories.includes(cat),
			);

			return isMatch;
		});
	} catch (error) {
		console.error("!!! CRITICAL ERROR in getRelatedProductsByCategory:", error);
		return [];
	}
}
