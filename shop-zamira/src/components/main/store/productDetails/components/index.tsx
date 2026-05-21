import { Product } from "@/types/ProductsType";
import ProductDescription from "./productDescription";
import ProductGallery from "./productGallery";
import ProductInfo from "./productInfo";

interface Props {
	product: Product;
}

export default function ProductDetails({ product }: Props) {
	return (
		<section className="mt-20 container mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
			<ProductGallery images={product.images} />

			<div className="space-y-10">
				<ProductInfo product={product} />
				<ProductDescription description={product.description} />
			</div>
		</section>
	);
}
