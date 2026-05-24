"use client";

import Image from "next/image";
import { CartItem } from "../types/cart";
import { useCartStore } from "@/store/useCartStore";
import QuantityControl from "./quantityControl";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
	item: CartItem;
};

export default function CartItemRow({ item }: Props) {
	const increaseQty = useCartStore((state) => state.increaseQty);
	const decreaseQty = useCartStore((state) => state.decreaseQty);
	const removeItem = useCartStore((state) => state.removeItem);

	return (
		<div className="grid grid-cols-12 gap-4 items-center border-b py-6">
			<div className="col-span-5 flex items-center gap-4">
				<button
					onClick={() => removeItem(item.id)}
					className="text-gray-500 hover:text-red-500"
				>
					×
				</button>

				<div className="relative w-20 h-20 shrink-0">
					<Image
						src={item.image}
						alt={item.name}
						fill
						className="object-contain"
					/>
				</div>

				<div>
					<h3 className="text-sm md:text-base font-medium">{item.name}</h3>
				</div>
			</div>

			<div className="col-span-2 text-sm md:text-base">
				{formatPrice(item.price)}
			</div>

			<div className="col-span-2">
				<QuantityControl
					quantity={item.quantity}
					onIncrease={() => increaseQty(item.id)}
					onDecrease={() => decreaseQty(item.id)}
				/>
			</div>

			<div className="col-span-3 text-sm md:text-base font-medium text-amber-700">
				{formatPrice(item.price * item.quantity)}
			</div>
		</div>
	);
}
