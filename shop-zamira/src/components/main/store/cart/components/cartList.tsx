"use client";

import { useCartStore } from "@/store/useCartStore";

import CartHeader from "./CartHeader";
import CartItemRow from "./cartItemRow";

export default function CartList() {
	const items = useCartStore((state) => state.items);

	return (
		<div className="bg-white rounded-sm h-9/12">
			<CartHeader />

			{items.length === 0 ? (
				<div className="py-10 text-center text-gray-500">
					سبد خرید شما خالی است
				</div>
			) : (
				items.map((item) => <CartItemRow key={item.id} item={item} />)
			)}
		</div>
	);
}
