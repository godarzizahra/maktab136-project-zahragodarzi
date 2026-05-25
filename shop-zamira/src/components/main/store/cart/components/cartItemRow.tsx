"use client";

import { API_BASE_URL } from "@/api/baseUrl";
import type { CartItem } from "@/components/main/store/cart/types/cart";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import QuantityControl from "./quantityControl";

type CartItemRowProps = {
	item: CartItem;
};

export default function CartItemRow({ item }: CartItemRowProps) {
	const updateItemQty = useCartStore((state) => state.updateItemQty);
	const removeItem = useCartStore((state) => state.removeItem);

	const handleIncrease = async () => {
		await updateItemQty(item._id, item.quantity + 1);
	};

	const handleDecrease = async () => {
		if (item.quantity <= 1) {
			await removeItem(item._id);
			return;
		}

		await updateItemQty(item._id, item.quantity - 1);
	};

	const handleRemove = async () => {
		await removeItem(item._id);
	};

	return (
		<div className="grid grid-cols-12 gap-4 items-center border-b pb-4">
			<div className="col-span-5 flex items-center gap-4">
				<button className="cursor-pointer" onClick={handleRemove}>
					×
				</button>
				<img
					src={`${API_BASE_URL}${item.product.images[0]}`}
					className="w-16 h-16"
				/>
				<p>{item.product?.name}</p>
			</div>

			<div className="col-span-2 text-center">
				{formatPrice(item.product?.price ?? 0)}
			</div>

			<div className="col-span-2 flex justify-center">
				<QuantityControl
					quantity={item.quantity}
					onIncrease={handleIncrease}
					onDecrease={handleDecrease}
				/>
			</div>

			<div className="col-span-3 text-left font-bold text-[#C9A227]">
				{formatPrice(item.product?.price * item.quantity)}
			</div>
		</div>
	);
}
