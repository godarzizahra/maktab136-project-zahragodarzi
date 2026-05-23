import ProductDetails from "@/components/main/store/productDetails/components";
import { getProductById } from "@/components/main/store/productDetails/services/getProductById";
import { getRelatedProductsSmart } from "@/components/main/store/productDetails/services/getRelatedProductsSmart";

import { notFound } from "next/navigation";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const product = await getProductById(id);

	if (!product) {
		notFound();
	}
	const category = Array.isArray(product.category)
		? product.category[0]
		: product.category;
	const relatedProducts = await getRelatedProductsSmart(product, 10);
	return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
