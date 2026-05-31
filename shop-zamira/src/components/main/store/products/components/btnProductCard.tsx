"use client";

import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

type AddToCartButtonProps = {
	productId: string;
	stock: number;
};
export default function BtnProductCard({
	productId,
	stock,
}: AddToCartButtonProps) {
	const router = useRouter();
	const addItem = useCartStore((state) => state.addItem);
	const loading = useCartStore((state) => state.loading);

	const isOutOfStock = stock <= 0;

	const handleAddToCart = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isOutOfStock) return;

		try {
			await addItem({ productId, quantity: 1 });
		} catch (error: any) {
			if (error?.response?.status === 401) {
				router.push("/login");
			}
		}
	};
	return (
		<button
			onClick={handleAddToCart}
			disabled={loading || isOutOfStock}
			className={`absolute bottom-0 left-0 w-full py-3 text-sm font-bold
				translate-y-full transition-transform duration-300
				group-hover:translate-y-0
				${
					isOutOfStock
						? "bg-gray-700/90 text-white cursor-not-allowed"
						: "bg-black/80 backdrop-blur-sm text-white hover:bg-[#C9A227]"
				}`}
		>
			{isOutOfStock
				? "ناموجود"
				: loading
					? "در حال افزودن..."
					: "افزودن به سبد"}
		</button>
	);
}
