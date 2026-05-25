"use client";

import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import { ShippingMethod } from "../types/cart";

const shippingOptions: ShippingMethod[] = [
	{
		id: "pickup",
		title: "تحویل حضوری",
		price: 0,
		description: "به ساعات کاری مجموعه در بخش تماس با ما توجه کنید",
	},
	{
		id: "express",
		title: "ارسال اکسپرس",
		price: 80000,
		description: "تحویل سه ساعته در ساعات اداری",
	},
];

export default function ShippingMethods() {
	const selected = useCartStore((state) => state.shippingMethod);
	const setShippingMethod = useCartStore((state) => state.setShippingMethod);

	return (
		<div className="space-y-3">
			{shippingOptions.map((method) => {
				const isSelected = selected?.id === method.id;

				return (
					<label
						key={method.id}
						className={`flex items-start gap-3 cursor-pointer rounded-lg border p-3 transition ${
							isSelected
								? "border-[var(--accent)] bg-gray-50"
								: "border-gray-200"
						}`}
					>
						<input
							type="radio"
							name="shipping"
							checked={isSelected}
							onChange={() => setShippingMethod(method)}
							className="mt-1 cursor-pointer shrink-0"
						/>
						<div className="min-w-0">
							<div className="font-medium">{method.title}</div>
							<div className="text-sm text-gray-500">{method.description}</div>
							<div className="text-sm text-gray-700 mt-1">
								{method.price === 0 ? "رایگان" : formatPrice(method.price)}
							</div>
						</div>
					</label>
				);
			})}
		</div>
	);
}
