"use client";

import { useCartStore } from "@/store/useCartStore";
import CartList from "./cartList";
import EmptyCart from "./emptyCart";
import CartSummary from "./cartSummary";

export default function CartContainer() {
	const cart = useCartStore((state) => state.cart);
	const loading = useCartStore((state) => state.loading);
	const error = useCartStore((state) => state.error);
	const totalItems =
		cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

	const totalPrice =
		cart?.items?.reduce(
			(sum, item) => sum + (item.product?.price || 0) * item.quantity,
			0,
		) ?? 0;

	if (loading && !cart) {
		return <div className="p-6">در حال دریافت سبد خرید...</div>;
	}

	if (error && !cart) {
		return <div className="p-6 text-red-500">{error}</div>;
	}

	if (!cart || !cart.items || cart.items.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<div className="lg:col-span-8">
				<CartList items={cart.items} />
			</div>

			<div className="lg:col-span-4">
				<CartSummary />
			</div>
		</div>
	);
}
