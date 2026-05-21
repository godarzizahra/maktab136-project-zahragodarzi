import { Product } from "@/types/ProductsType";
import ProductActions from "./productActions";

export default function ProductInfo({ product }: { product: Product }) {
	return (
		<div className="space-y-7 mt-8">
			<h1 className="text-2xl font-bold">{product.name}</h1>

			<p className="text-2xl text-primary font-semibold">
				{product.price.toLocaleString()} تومان
			</p>
			<p className="text-2xl text-primary font-semibold">{product.brand}</p>
			<p className="text-sm text-muted-foreground">
				<span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
					{product.stock > 0 ? " موجود در انبار" : " ناموجود"}
				</span>
			</p>

			<ProductActions product={product} />
		</div>
	);
}
