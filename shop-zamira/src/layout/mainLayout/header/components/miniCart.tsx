"use client";

import { API_BASE_URL } from "@/api/baseUrl";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";

export default function MiniCart() {
	const cart = useCartStore((state) => state.cart);
	const removeItem = useCartStore((state) => state.removeItem);

	const items = cart?.items ?? [];

	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

	const totalPrice = items.reduce(
		(sum, item) => sum + item.product.price * item.quantity,
		0,
	);

	return (
		<div className="relative group/cart">
			<Link href="/cart" className="relative flex items-center">
				<button
					aria-label="سبد خرید"
					className="hover:text-[var(--accent)] transition relative"
					type="button"
				>
					<ShoppingCart size={24} />

					{itemCount > 0 && (
						<span className="absolute -top-2 -right-2 bg-[var(--accent)] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
							{itemCount}
						</span>
					)}
				</button>
			</Link>

			<div
				className="
					absolute left-0 top-4 mt-3 w-80 rounded-xl border border-gray-100 bg-white p-3 shadow-xl z-50
					opacity-0 translate-y-2 invisible pointer-events-none
					transition-all duration-200 ease-out
					group-hover/cart:opacity-100
					group-hover/cart:translate-y-0
					group-hover/cart:visible
					group-hover/cart:pointer-events-auto
				"
			>
				<div className="mb-3 flex items-center justify-between border-b pb-2">
					<h3 className="text-sm font-bold text-gray-800">سبد خرید</h3>
					<span className="text-xs text-gray-500">{itemCount} آیتم</span>
				</div>

				<div className="max-h-72 overflow-y-auto pr-1">
					{items.length ? (
						items.map((item) => (
							<div
								key={item._id}
								className="flex items-center gap-3 border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0"
							>
								<img
									src={`${API_BASE_URL}${item.product?.images?.[0]}`}
									alt={item.product?.name}
									className="w-14 h-14 rounded-md object-cover border"
								/>

								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-800 truncate">
										{item.product?.name}
									</p>
									<p className="text-xs text-gray-500 mt-1">
										{item.quantity} × {item.product?.price.toLocaleString()}{" "}
										تومان
									</p>
									<p className="text-xs font-semibold text-[var(--accent)] mt-1">
										{(item.product?.price * item.quantity).toLocaleString()}{" "}
										تومان
									</p>
								</div>

								<button
									type="button"
									onClick={() => removeItem(item._id)}
									className="text-gray-400 hover:text-red-500 transition p-1 cursor-pointer"
									aria-label="حذف از سبد"
								>
									<Trash2 size={16} />
								</button>
							</div>
						))
					) : (
						<p className="text-center text-sm text-gray-500 py-6">
							سبد خرید خالی است
						</p>
					)}
				</div>

				{items.length > 0 && (
					<>
						<div className="mt-3 border-t pt-3 space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600">تعداد کل:</span>
								<span className="font-medium text-gray-800">{itemCount}</span>
							</div>

							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600">جمع کل:</span>
								<span className="font-bold text-[var(--accent)]">
									{totalPrice.toLocaleString()} تومان
								</span>
							</div>
						</div>

						<div className="mt-4 grid grid-cols-2 gap-2">
							<Link
								href="/cart"
								className="text-center rounded-md border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
							>
								مشاهده سبد
							</Link>

							<Link
								href="/checkout"
								className="text-center rounded-md bg-[var(--accent)] py-2 text-sm font-medium text-white hover:opacity-90 transition"
							>
								تسویه حساب
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
