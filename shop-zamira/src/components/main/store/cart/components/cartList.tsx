"use client";

import type { CartItem } from "@/components/main/store/cart/types/cart";
import CartHeader from "./CartHeader";
import CartItemRow from "./cartItemRow";
import CouponBox from "./couponBox";

type CartListProps = {
	items: CartItem[];
};

export default function CartList({ items }: CartListProps) {
	return (
		<div className=" border rounded-xl p-6">
			<CartHeader />
			<div className="space-y-4">
				{items.map((item) => (
					<CartItemRow key={item._id} item={item} />
				))}
			</div>
			<CouponBox />
		</div>
	);
}
