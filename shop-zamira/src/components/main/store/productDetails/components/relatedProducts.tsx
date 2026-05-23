import { Product } from "@/components/admin/types/ProductsType";
import ProductSlider from "../../home/components/ProductSlider";

type RelatedProductsProps = {
	products: Product[];
};

export default function RelatedProducts({ products }: RelatedProductsProps) {
	if (!products || products.length === 0) return null;

	return (
		<section className="mt-20 border-t pt-12">
			<h2 className="text-2xl font-bold mb-8 px-4">محصولات مشابه </h2>
			<ProductSlider products={products} />
		</section>
	);
}
