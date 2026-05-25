"use client";

import { useCartStore } from "@/store/useCartStore";

export default function ClearCartButton() {
	const clearCart = useCartStore((state) => state.clearCart);
	const loading = useCartStore((state) => state.loading);

	const handleClear = async () => {
		await clearCart();
	};

	return (
		<button
			onClick={handleClear}
			disabled={loading}
			className="rounded-lg bg-red-500 px-4 py-2 text-white disabled:opacity-50"
		>
			پاک کردن سبد
		</button>
	);
}
