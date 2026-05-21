import { getProducts } from "@/services/productService";
import ProductSlider from "./ProductSlider";

export default async function BestSellerSection() {
	const res = await getProducts({
		page: 1,
		limit: 9,
	});

	const bestProducts = res.data.slice(3, 9);

	return (
		<section className="py-12 relative">
			<div className="container mx-auto px-4 mb-8">
				<h2 className="text-2xl md:text-3xl font-bold text-center">
					پرفروش‌ترین ساعت‌ها
				</h2>
			</div>

			<ProductSlider products={bestProducts} />
		</section>
	);
}
