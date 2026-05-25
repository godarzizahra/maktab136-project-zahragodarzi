"use client";

import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import ShippingMethods from "./ShippingMethods";

export default function CartSummary() {
	const subtotal = useCartStore((state) => state.subtotal());
	const shipping = useCartStore((state) => state.shippingCost());
	const total = useCartStore((state) => state.total());
	const discount = useCartStore((state) => state.discount);

	return (
		<div className="lg:sticky lg:top-24 border rounded-lg p-4 md:p-6 bg-white">
			<div className="flex items-center justify-between border-b pb-4 mb-4 gap-4">
				<span>مجموع سبد خرید</span>
				<span className="text-sm md:text-base">{formatPrice(subtotal)}</span>
			</div>

			<div className="border-b pb-4 mb-4">
				<div className="flex items-center justify-between mb-3 gap-4">
					<span>حمل و نقل</span>
					<span className="text-sm md:text-base">{formatPrice(shipping)}</span>
				</div>
				<ShippingMethods />
			</div>

			{discount > 0 && (
				<div className="flex items-center justify-between border-b pb-4 mb-4 text-green-600 gap-4">
					<span>تخفیف</span>
					<span>{formatPrice(discount)}</span>
				</div>
			)}

			<div className="flex items-center justify-between text-lg md:text-xl font-bold mb-6 gap-4">
				<span>مبلغ قابل پرداخت</span>
				<span>{formatPrice(total)}</span>
			</div>

			<Link href="/checkout" className="block">
				<button className="w-full bg-[var(--accent)] text-white py-3 rounded-md cursor-pointer">
					تایید و تکمیل سفارش
				</button>
			</Link>
		</div>
	);
}
