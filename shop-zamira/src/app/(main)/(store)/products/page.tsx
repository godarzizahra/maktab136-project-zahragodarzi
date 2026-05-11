import ProductsPageStore from "@/components/main/store/products/components";

type Props = {
	searchParams: Promise<{
		page?: string;
		sort?: string;
	}>;
};

export default async function ProductsPage({ searchParams }: Props) {
	const resolvedSearchParams = await searchParams;

	return <ProductsPageStore searchParams={resolvedSearchParams} />;
}
