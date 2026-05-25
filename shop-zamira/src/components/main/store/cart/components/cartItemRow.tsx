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
		<div className="border-b pb-4 last:border-b-0">
			{/* Mobile */}
			<div className="md:hidden space-y-4">
				<div className="flex items-start gap-3">
					<button
						className="cursor-pointer text-lg leading-none mt-1 shrink-0"
						onClick={handleRemove}
						aria-label="حذف محصول"
					>
						×
					</button>

					<img
						src={`${API_BASE_URL}${item.product.images[0]}`}
						alt={item.product?.name || "product"}
						className="w-20 h-20 rounded-md object-cover shrink-0"
					/>

					<div className="min-w-0 flex-1">
						<p className="font-medium line-clamp-2">{item.product?.name}</p>
						<p className="text-sm text-gray-500 mt-2">
							قیمت: {formatPrice(item.product?.price ?? 0)}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-between gap-3">
					<span className="text-sm text-gray-500">تعداد</span>
					<QuantityControl
						quantity={item.quantity}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
					/>
				</div>

				<div className="flex items-center justify-between">
					<span className="text-sm text-gray-500">جمع کل</span>
					<span className="font-bold text-[#C9A227]">
						{formatPrice((item.product?.price ?? 0) * item.quantity)}
					</span>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
				<div className="md:col-span-5 flex items-center gap-4 min-w-0">
					<button
						className="cursor-pointer text-lg leading-none shrink-0"
						onClick={handleRemove}
						aria-label="حذف محصول"
					>
						×
					</button>
					<img
						src={`${API_BASE_URL}${item.product.images[0]}`}
						alt={item.product?.name || "product"}
						className="w-16 h-16 rounded-md object-cover shrink-0"
					/>
					<p className="truncate">{item.product?.name}</p>
				</div>

				<div className="md:col-span-2 text-center">
					{formatPrice(item.product?.price ?? 0)}
				</div>

				<div className="md:col-span-2 flex justify-center">
					<QuantityControl
						quantity={item.quantity}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
					/>
				</div>

				<div className="md:col-span-3 text-left font-bold text-[#C9A227]">
					{formatPrice((item.product?.price ?? 0) * item.quantity)}
				</div>
			</div>
		</div>
	);
}
