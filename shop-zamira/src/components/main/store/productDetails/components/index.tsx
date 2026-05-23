import { Product } from "@/components/admin/types/ProductsType";
import ProductDescription from "./productDescription";
import ProductGallery from "./productGallery";
import ProductInfo from "./productInfo";
import ProductSpecifications from "./productSpecifications";
import RelatedProducts from "./relatedProducts";

interface Props {
	product: Product;
	relatedProducts: Product[];
}

export default function ProductDetails({ product, relatedProducts }: Props) {
	return (
		<div className="container mx-auto px-4 py-8 mt-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
				<ProductGallery images={product.images} />
				<div className="space-y-6">
					<ProductInfo product={product} />
				</div>
			</div>

			<div className="w-full">
				<div className="max-w-5xlxl mx-auto space-y-4">
					<ProductDescription description={product.description} />
					<ProductSpecifications product={product} />
				</div>
			</div>
			<RelatedProducts products={relatedProducts} />
		</div>
	);
}
