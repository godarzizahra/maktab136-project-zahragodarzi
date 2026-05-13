"use client";

import { Product } from "@/types/ProductsType";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import ProductCard from "../../products/components/productsCard";

interface Props {
	products: Product[];
}

export default function ProductSlider({ products }: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;

		const amount = 400;

		scrollRef.current.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<>
			<button
				onClick={() => scroll("left")}
				className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
			>
				<ArrowLeft />
			</button>

			<button
				onClick={() => scroll("right")}
				className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
			>
				<ArrowRight />
			</button>

			<div
				ref={scrollRef}
				className="overflow-x-auto scrollbar-hide px-4 pb-2 scroll-smooth"
			>
				<div className="flex gap-4 min-w-[1400px] snap-x snap-mandatory">
					{products.map((item) => (
						<div
							key={item._id}
							className="snap-start shrink-0 w-[240px] md:w-[320px] lg:w-[340px]"
						>
							<ProductCard product={item} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
