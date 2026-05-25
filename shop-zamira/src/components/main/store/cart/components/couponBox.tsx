"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CouponBox() {
	const couponCode = useCartStore((state) => state.couponCode);
	const setCouponCode = useCartStore((state) => state.setCouponCode);
	const applyCouponLocal = useCartStore((state) => state.applyCouponLocal);

	return (
		<div className="flex flex-col md:flex-row gap-3 mt-6">
			<input
				type="text"
				value={couponCode}
				onChange={(e) => setCouponCode(e.target.value)}
				placeholder="کد تخفیف"
				className="border rounded-md px-4 py-3 w-full md:w-72"
			/>
			<button
				onClick={applyCouponLocal}
				className="bg-[var(--accent)] text-white px-6 py-3 rounded-md cursor-pointer"
			>
				اعمال تخفیف
			</button>
		</div>
	);
}
