import { ShoppingBasketIcon } from "lucide-react";

export default function EmptyCart() {
	return (
		<div className="flex flex-col items-center rounded-xl border p-10 text-center">
			<ShoppingBasketIcon size={70} className="text-[var(--text-secondary)]" />
			<h2 className="mb-2 text-xl font-bold">سبد خرید شما خالی است</h2>
			<p className="text-gray-500">هنوز محصولی به سبد خرید اضافه نکرده‌اید.</p>
		</div>
	);
}
