"use client";

import { API_BASE_URL } from "@/api/baseUrl";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";

export default function OrderSummary() {
	const cart = useCartStore((state) => state.cart);
	const subtotal = useCartStore((state) => state.subtotal());
	const shipping = useCartStore((state) => state.shippingCost());
	const total = useCartStore((state) => state.total());
	const discount = useCartStore((state) => state.discount);

	const totalItems =
		cart?.items?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

	return (
		<div className="lg:sticky lg:top-24 border rounded-xl p-4 md:p-6 w-full">
			<h2 className="text-lg md:text-xl font-bold mb-4 ">خلاصه سفارش</h2>

			<div className="space-y-4 border-b pb-4 mb-4">
				{cart?.items?.map((item) => (
					<div key={item._id} className="flex items-center gap-3">
						<img
							src={`${API_BASE_URL}${item.product.images[0]}`}
							alt={item.product?.name || "product"}
							className="w-14 h-14 rounded-md object-cover shrink-0"
						/>
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-medium">
								{item.product?.name}
							</p>
							<p className="text-xs text-[var(--text-secondary)]">
								تعداد: {item.quantity}
							</p>
						</div>
						<div className="text-sm font-medium shrink-0">
							{formatPrice((item.product?.price ?? 0) * item.quantity)}
						</div>
					</div>
				))}
			</div>

			<div className="space-y-3">
				<div className="flex items-center justify-between text-sm">
					<span>تعداد کالاها</span>
					<span>{totalItems}</span>
				</div>

				<div className="flex items-center justify-between text-sm">
					<span>جمع سبد خرید</span>
					<span>{formatPrice(subtotal)}</span>
				</div>

				<div className="flex items-center justify-between text-sm">
					<span>هزینه ارسال</span>
					<span>{formatPrice(shipping)}</span>
				</div>

				{discount > 0 && (
					<div className="flex items-center justify-between text-sm text-green-600">
						<span>تخفیف</span>
						<span>{formatPrice(discount)}</span>
					</div>
				)}

				<div className="flex items-center justify-between border-t pt-4 mt-4 text-base md:text-lg font-bold">
					<span>مبلغ نهایی</span>
					<span>{formatPrice(total)}</span>
				</div>
			</div>

			<div className="  w-full  mt-4">
				<button
					type="submit"
					form="checkout-form"
					className="w-full block md:w-auto rounded-md bg-[var(--accent)] px-8 py-3 text-white cursor-pointer"
				>
					ثبت سفارش
				</button>
			</div>
		</div>
	);
}
