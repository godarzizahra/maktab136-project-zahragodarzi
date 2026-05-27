import { getProducts } from "@/services/productService";

import Pagination from "@/components/base/pagination";
import ProductsGrid from "./productsGrid";

interface Props {
	searchParams: {
		page?: string;
		sort?: string;
		brand?: string;
		category?: string;
		minPrice?: string;
		maxPrice?: string;
		gender?: string;
	};
}

export default async function ProductsPageStore({ searchParams }: Props) {
	const page = Math.max(1, Number(searchParams.page) || 1);
	const sort = searchParams.sort || "newest";
	const brand = searchParams.brand;
	const category = searchParams.category;
	const minPrice = searchParams.minPrice;
	const maxPrice = searchParams.maxPrice;
	const gender = searchParams.gender;

	const res = await getProducts({
		page,
		sort,
		limit: 10,
		brand,
		category,
		minPrice,
		maxPrice,
		gender,
	});

	return (
		<>
			<ProductsGrid products={res.data} />
			<Pagination currentPage={page} totalPages={res.pages} />
		</>
	);
}
