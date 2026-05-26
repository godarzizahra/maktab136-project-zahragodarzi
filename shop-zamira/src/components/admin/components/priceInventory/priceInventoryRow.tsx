"use client";

import { Product } from "@/components/admin/types/ProductsType";
import { useProductStore } from "@/store/useProductStore";
import { toPersian } from "@/utils/persianUtils";

import { Save } from "lucide-react";
import { useState } from "react";

export default function PriceInventoryRow({ product }: { product: Product }) {
	const updatePriceAndStock = useProductStore(
		(state) => state.updatePriceAndStock,
	);
	const [price, setPrice] = useState(product.price);
	const [stock, setStock] = useState(product.stock);

	const [editingPrice, setEditingPrice] = useState(false);
	const [editingStock, setEditingStock] = useState(false);

	const handleSave = () => {
		updatePriceAndStock(product._id, {
			price: Number(price),
			stock: Number(stock),
		});

		setEditingPrice(false);
		setEditingStock(false);
	};

	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3">
				<img
					src={`http://localhost:5000${product.images?.[0] ?? ""}`}
					alt={product.name}
					className="w-14 h-14 rounded object-cover"
				/>
			</td>

			<td className="py-3 px-3">{product.name}</td>
			<td className="py-3 px-3">{product.brand}</td>

			<td className="py-3 px-3">
				{editingPrice ? (
					<input
						type="number"
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
						onBlur={() => setEditingPrice(false)}
						autoFocus
						className="w-32 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
					/>
				) : (
					<span
						onClick={() => setEditingPrice(true)}
						className="cursor-pointer hover:text-[var(--accent)]"
					>
						{toPersian(price.toLocaleString())} تومان
					</span>
				)}
			</td>

			<td className="py-3 px-3">
				{editingStock ? (
					<input
						type="number"
						value={stock}
						onChange={(e) => setStock(Number(e.target.value))}
						onBlur={() => setEditingStock(false)}
						autoFocus
						className="w-24 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
					/>
				) : (
					<span
						onClick={() => setEditingStock(true)}
						className="cursor-pointer hover:text-[var(--accent)]"
					>
						{toPersian(stock)}
					</span>
				)}
			</td>

			<td className="py-3 px-3">
				{stock > 0 ? (
					<span className="text-green-600">موجود</span>
				) : (
					<span className="text-red-600">ناموجود</span>
				)}
			</td>

			<td className="py-3 px-3">
				<button
					onClick={handleSave}
					className="flex items-center gap-2 rounded-lg bg-[var(--accent)] px-3 py-2 text-black"
				>
					<Save size={16} />
					ذخیره
				</button>
			</td>
		</tr>
	);
}
