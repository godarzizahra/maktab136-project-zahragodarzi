"use client";

import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/ProductsType";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import ProductCard from "../../products/components/productscard";

export default function NewArrivalSection() {
	const { products, loading } = useProducts();
	const scrollRef = useRef<HTMLDivElement>(null);

	const newestProducts = products?.slice(0, 6) || [];

	if (loading || !products) return <p>در حال بارگذاری...</p>;

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;

		const amount = 400;

		scrollRef.current.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<section className="py-12 relative">
			<div className="container mx-auto px-4 mb-8">
				<h2 className="text-2xl md:text-3xl font-bold text-center">
					جدیدترین ساعت ها
				</h2>
			</div>

			<button
				onClick={() => scroll("left")}
				className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
			>
				<ArrowLeft />
			</button>

			<button
				onClick={() => scroll("right")}
				className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
			>
				<ArrowRight />
			</button>

			<div
				ref={scrollRef}
				className="overflow-x-auto scrollbar-hide px-4 pb-2 scroll-smooth"
			>
				<div className="flex gap-4 min-w-[1400px] snap-x snap-mandatory">
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
