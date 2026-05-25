"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import CheckoutForm from "./checkoutForm";
import OrderSummary from "./orderSummary";

export default function CheckoutContainer() {
	const cart = useCartStore((state) => state.cart);
	const loading = useCartStore((state) => state.loading);

	if (loading && !cart) {
		return <div className="p-6">در حال آماده‌سازی اطلاعات پرداخت...</div>;
	}

	if (!cart || !cart.items || cart.items.length === 0) {
		return (
			<div className="border rounded-xl p-6 text-center space-y-4">
				<h2 className="text-xl font-bold">سبد خرید شما خالی است</h2>
				<p className="text-[var(--text-secondary)]">
					برای ادامه فرایند پرداخت، ابتدا محصولی به سبد خرید اضافه کنید.
				</p>
				<Link
					href="/"
					className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-white"
				>
					بازگشت به فروشگاه
				</Link>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
				<div className="lg:col-span-8">
					<CheckoutForm />
				</div>

				<div className="lg:col-span-4">
					<OrderSummary />
				</div>
			</div>
		</div>
	);
}
