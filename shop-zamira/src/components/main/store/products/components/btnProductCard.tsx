"use client";

import { useCartStore } from "@/store/useCartStore";
import { MouseEvent } from "react";
import toast from "react-hot-toast";

type AddToCartButtonProps = {
	productId: string;
	name?: string;
	stock: number;
};
export default function BtnProductCard({
	productId,
	name,
	stock,
}: AddToCartButtonProps) {
	const addItem = useCartStore((state) => state.addItem);
	const loading = useCartStore((state) => state.loading);

	const isOutOfStock = stock <= 0;
	const handleAddToCart = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (isOutOfStock) return;
		await addItem({
			productId,
			quantity: 1,
		});
		toast.success(`${name} به سبد خرید شما اضافه شد `);
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
