import { Product } from "@/components/admin/types/ProductsType";
import { FeaturesData } from "../constants/featuresData";
import ProductActions from "./productActions";

export default function ProductInfo({ product }: { product: Product }) {
	const stock = product.stock;

	const stockText =
		stock <= 0
			? "ناموجود"
			: stock === 1
				? "فقط ۱ عدد باقی مانده"
				: stock === 2
					? "فقط ۲ عدد باقی مانده"
					: "موجود در انبار";

	const stockClass =
		stock <= 0
			? "text-red-500"
			: stock <= 2
				? "text-orange-500"
				: "text-green-600";
	return (
		<div className="space-y-5 mt-8">
			<h1 className="text-2xl font-bold text-center md:text-right">
				{product.name}
			</h1>

			<div className=" flex flex-col gap-6 items-center justify-between md:flex-row flex-wrap">
				<div className="flex flex-col gap-5">
					<p className="text-xl text-primary font-semibold">
						{product.price.toLocaleString()} تومان
					</p>
					<p className="text-xl text-primary font-semibold">
						برند :{product.brand}
					</p>
					<p className="text-xl text-primary font-semibold">
						{" "}
						دسته :{product.category}
					</p>
					<p className="text-sm text-muted-foreground">
						<span className={stockClass}>{stockText}</span>
					</p>
				</div>
				<div className="bg-[#e7e7e7] p-2 rounded-xl ">
					{FeaturesData.map((feature) => {
						const Icon = feature.icon;
						return (
							<div
								key={feature.id}
								className="group flex  items-center text-center gap-3 p-2 transition "
							>
								<Icon
									className="w-6 h-6
										text-[var(--text-secondary)]
										text-[var(--accent)]
										transition-colors"
								/>

								<p className="text-xs md:text-sm text-[var(--accent)]">
									{feature.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			<ProductActions product={product} />
		</div>
	);
}
