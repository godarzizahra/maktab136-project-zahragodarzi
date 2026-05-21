import ProductDetails from "@/components/main/store/productDetails/components";
import { getProductById } from "@/components/main/store/productDetails/services/getProductById";
import { notFound } from "next/navigation";

export default async function ProductPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const product = await getProductById(id);
	// console.log(product);
	if (!product) {
		notFound();
	}

	return <ProductDetails product={product} />;
}
