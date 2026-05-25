"use client";

import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import ShippingMethods from "./ShippingMethods";

export default function CartSummary() {
	const subtotal = useCartStore((state) => state.subtotal());
	const shipping = useCartStore((state) => state.shippingCost());
	const total = useCartStore((state) => state.total());
	const discount = useCartStore((state) => state.discount);

	return (
		<div className=" top-18 border rounded-lg p-6  ">
			<div className="flex items-center justify-between border-b pb-4 mb-4">
				<span>مجموع سبد خرید </span>
				<span>{formatPrice(subtotal)}</span>
			</div>

			<div className="border-b pb-4 mb-4">
				<div className="flex items-center justify-between mb-3">
					<span>حمل و نقل</span>
					<span>{formatPrice(shipping)}</span>
				</div>
				<ShippingMethods />
			</div>

			{discount > 0 && (
				<div className="flex items-center justify-between border-b pb-4 mb-4 text-green-600">
					<span>تخفیف</span>
					<span>{formatPrice(discount)}</span>
				</div>
			)}

			<div className="flex items-center justify-between text-xl font-bold mb-6">
				<span>مبلغ قابل پرداخت </span>
				<span>{formatPrice(total)}</span>
			</div>

			<button className="w-full bg-[var(--accent)] text-white py-3 rounded-md cursor-pointer">
				تایید و تکمیل سفارش
			</button>
		</div>
	);
}
