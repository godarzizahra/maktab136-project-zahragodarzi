"use client";

import { useCartStore } from "@/store/useCartStore";

type AddToCartButtonProps = {
	productId: string;
};
export default function BtnProductCard({ productId }: AddToCartButtonProps) {
	const addItem = useCartStore((state) => state.addItem);
	const loading = useCartStore((state) => state.loading);
	const handleClick = () => {};

	const handleAddToCart = async () => {
		await addItem({
			productId,
			quantity: 1,
		});
	};
	return (
		<button
			onClick={handleAddToCart}
			disabled={loading}
			className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm text-white py-3 text-sm font-bold
				translate-y-full transition-transform duration-300
				group-hover:translate-y-0
				hover:bg-[#C9A227]"
		>
			{loading ? "در حال افزودن..." : "افزودن به سبد"}
		</button>
	);
}
