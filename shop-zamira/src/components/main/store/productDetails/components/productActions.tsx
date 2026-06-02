"use client";

import { Product } from "@/components/admin/types/ProductsType";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { useHydrated } from "../../profile/hooks/useHydrated";

interface Props {
	product: Product;
}

const MAX_QTY_PER_ITEM = 3;

export default function ProductActions({ product }: Props) {
	const router = useRouter();

	const cart = useCartStore((s) => s.cart);
	const loading = useCartStore((s) => s.loading);
	const addItem = useCartStore((s) => s.addItem);
	const updateItemQty = useCartStore((s) => s.updateItemQty);
	const removeItem = useCartStore((s) => s.removeItem);

	const toggleWishlist = useWishlistStore((s) => s.toggleItem);
	const isInWishlist = useWishlistStore((s) => s.isInWishlist(product._id));

	const hydrated = useHydrated();

	const isOutOfStock = product.stock <= 0;
	const maxAllowedQty = Math.min(product.stock, MAX_QTY_PER_ITEM);

	const cartItem = useMemo(() => {
		return cart?.items?.find((it) => it.product?._id === product._id) ?? null;
	}, [cart?.items, product._id]);

	const qty = cartItem?.quantity ?? 0;

	const handleAdd = async () => {
		if (isOutOfStock) return;

		if (qty >= maxAllowedQty) {
			toast.error(`حداکثر ${maxAllowedQty} عدد از این محصول قابل سفارش است`);
			return;
		}

		try {
			await addItem({ productId: String(product._id), quantity: 1 });
		} catch (error: any) {
			if (error?.response?.status === 401) {
				router.push("/login");
			}
		}
	};
	if (!hydrated) return null;
	const handleIncrease = async () => {
		if (!cartItem) return handleAdd();

		if (qty >= maxAllowedQty) {
			toast.error(`حداکثر ${maxAllowedQty} عدد از این محصول قابل سفارش است`);
			return;
		}

		await updateItemQty(cartItem._id, qty + 1);
	};

	const handleDecrease = async () => {
		if (!cartItem) return;

		if (qty <= 1) {
			await removeItem(cartItem._id);
			return;
		}

		await updateItemQty(cartItem._id, qty - 1);
	};

	return (
		<div className="flex items-center justify-center gap-3 pt-3 md:justify-start">
			<button
				onClick={() => toggleWishlist(product)}
				className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-200"
				style={{
					backgroundColor: isInWishlist ? "var(--accent)" : "var(--surface)",
					borderColor: "var(--border)",
					color: isInWishlist ? "var(--background)" : "var(--text-primary)",
				}}
				aria-label="افزودن به علاقه‌مندی‌ها"
			>
				<Heart size={20} fill={isInWishlist ? "currentColor" : "none"} />
			</button>

			{isOutOfStock ? (
				<span className="cursor-not-allowed rounded-xl bg-gray-200 px-6 py-3 text-sm font-medium text-gray-500">
					ناموجود
				</span>
			) : qty === 0 ? (
				<button
					onClick={handleAdd}
					disabled={loading}
					className="flex items-center gap-2 rounded-xl px-6 py-3 transition-all duration-200"
					style={{
						backgroundColor: "var(--primary)",
						color: "var(--background)",
					}}
				>
					<ShoppingCart size={18} />
					{loading ? "در حال افزودن..." : "افزودن به سبد"}
				</button>
			) : (
				<div
					className="flex items-center overflow-hidden rounded-xl border"
					style={{
						borderColor: "var(--border)",
						backgroundColor: "var(--surface)",
					}}
				>
					<button
						onClick={handleIncrease}
						disabled={loading || qty >= maxAllowedQty}
						className="px-4 py-3 transition-colors duration-200 disabled:opacity-50"
					>
						<Plus size={18} />
					</button>

					<span className="px-5 font-medium">{qty}</span>

					<button
						onClick={handleDecrease}
						disabled={loading}
						className="px-4 py-3 transition-colors duration-200 disabled:opacity-50"
					>
						<Minus size={18} />
					</button>
				</div>
			)}
		</div>
	);
}
