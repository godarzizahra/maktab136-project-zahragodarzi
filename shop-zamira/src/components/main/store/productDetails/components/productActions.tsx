"use client";

import { Product } from "@/components/admin/types/ProductsType";
import { useCartStore } from "@/store/useCartStore";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

interface Props {
	product: Product;
}

export default function ProductActions({ product }: Props) {
	const [wishlist, setWishlist] = useState(false);
	const router = useRouter();
	const cart = useCartStore((s) => s.cart);
	const loading = useCartStore((s) => s.loading);
	const addItem = useCartStore((s) => s.addItem);
	const updateItemQty = useCartStore((s) => s.updateItemQty);
	const removeItem = useCartStore((s) => s.removeItem);

	const cartItem = useMemo(() => {
		return cart?.items?.find((it) => it.product?._id === product._id) ?? null;
	}, [cart?.items, product._id]);

	const qty = cartItem?.quantity ?? 0;

	const handleAdd = async () => {
		try {
			await addItem({ productId: String(product._id), quantity: 1 });
		} catch (error: any) {
			if (error?.response?.status === 401) {
				router.push("/login");
			}
		}
	};

	const handleIncrease = async () => {
		if (!cartItem) return handleAdd();
		if (qty >= product.stock) return;

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
		<div className="flex items-center gap-3 pt-3 justify-center md:justify-start">
			<button
				onClick={() => setWishlist(!wishlist)}
				className="flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-200"
				style={{
					backgroundColor: wishlist ? "var(--accent)" : "var(--surface)",
					borderColor: "var(--border)",
					color: wishlist ? "var(--background)" : "var(--text-primary)",
				}}
			>
				<Heart size={20} fill={wishlist ? "currentColor" : "none"} />
			</button>

			{qty === 0 ? (
				<button
					onClick={handleAdd}
					disabled={loading || product.stock === 0}
					className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
					className="flex items-center rounded-xl overflow-hidden border"
					style={{
						borderColor: "var(--border)",
						backgroundColor: "var(--surface)",
					}}
				>
					<button
						onClick={handleIncrease}
						disabled={loading || qty >= product.stock}
						className="px-4 py-3 transition-colors duration-200 disabled:opacity-50"
						style={{ color: "var(--text-primary)" }}
					>
						<Plus size={18} />
					</button>

					<span
						className="px-5 font-medium"
						style={{ color: "var(--text-primary)" }}
					>
						{qty}
					</span>

					<button
						onClick={handleDecrease}
						disabled={loading}
						className="px-4 py-3 transition-colors duration-200 disabled:opacity-50"
						style={{ color: "var(--text-primary)" }}
					>
						<Minus size={18} />
					</button>
				</div>
			)}
		</div>
	);
}
