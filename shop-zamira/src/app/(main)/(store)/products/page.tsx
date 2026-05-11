import { getProducts } from "@/services/productService";
import ProductsPageClientStore from "@/components/main/store/products/components";

export default async function ProductsPage({
	searchParams,
}: {
	searchParams: { page?: string };
}) {
	const page = Number(searchParams?.page) || 1;

	const { data, page: currentPage, pages } = await getProducts(page, 10);

	return (
		<ProductsPageClientStore
			initialProducts={data}
			initialPage={currentPage}
			totalPages={pages}
		/>
	);
}
