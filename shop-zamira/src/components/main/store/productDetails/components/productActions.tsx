"use client";

import { Product } from "@/types/ProductsType";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Props {
	product: Product;
}

export default function ProductActions({ product }: Props) {
	const [count, setCount] = useState(0);
	const [wishlist, setWishlist] = useState(false);

	const increase = () => {
		if (count >= product.stock) return;
		setCount((p) => p + 1);
	};

	const decrease = () => {
		if (count <= 1) return setCount(0);
		setCount((p) => p - 1);
	};

	return (
		<div className="flex items-center gap-3 pt-3">
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

			{count === 0 ? (
				<button
					onClick={() => setCount(1)}
					disabled={product.stock === 0}
					className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
					style={{
						backgroundColor: "var(--primary)",
						color: "var(--background)",
					}}
				>
					<ShoppingCart size={18} />
					افزودن به سبد
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
						onClick={increase}
						className="px-4 py-3 transition-colors duration-200"
						style={{
							color: "var(--text-primary)",
						}}
					>
						<Plus size={18} />
					</button>

					<span
						className="px-5 font-medium"
						style={{
							color: "var(--text-primary)",
						}}
					>
						{count}
					</span>

					<button
						onClick={decrease}
						className="px-4 py-3 transition-colors duration-200"
						style={{
							color: "var(--text-primary)",
						}}
					>
						<Minus size={18} />
					</button>
				</div>
			)}
		</div>
	);
}
