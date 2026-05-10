"use client";

import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/ProductsType";
import { useRef } from "react";
import ProductCard from "../../products/components/productscard";

export default function BestSellerSection() {
	const { products, loading } = useProducts();
	const scrollRef = useRef<HTMLDivElement>(null);

	const newestProducts = products?.slice(3, 9) || [];

	if (loading) return null;

	return (
		<section className="py-12">
			<div className="container mx-auto px-4 mb-8">
				<h2 className="text-2xl md:text-3xl font-bold text-center">
					پرفروش‌ترین ساعت‌ها
				</h2>
			</div>

			<div
				ref={scrollRef}
				className="overflow-x-auto scrollbar-hide px-4 pb-2 scroll-smooth"
			>
				<div className="flex gap-4 min-w-[1400px]  snap-x snap-mandatory">
					{newestProducts.map((item: Product) => (
						<div
							key={item._id}
							className="snap-start shrink-0 w-[240px] md:w-[320px] lg:w-[340px]"
						>
							<ProductCard {...item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
