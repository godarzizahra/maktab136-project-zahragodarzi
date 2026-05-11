import { getProducts } from "@/services/productService";
import Pagination from "./pagination";
import ProductsGrid from "./productsGrid";

interface Props {
	searchParams: {
		page?: string;
		sort?: string;
	};
}

export default async function ProductsPageStore({ searchParams }: Props) {
	const page = Math.max(1, Number(searchParams.page) || 1);
	const sort = searchParams.sort || "newest";

	const res = await getProducts({ page, sort, limit: 10 });

	return (
		<>
			<ProductsGrid products={res.data} />

			<Pagination currentPage={page} totalPages={res.pages} />
		</>
	);
}
