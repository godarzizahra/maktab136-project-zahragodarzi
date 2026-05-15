"use client";

import { Product } from "@/components/admin/types/dashboardProductsType";
import { Save } from "lucide-react";
import { useState } from "react";

export default function PriceInventoryRow({ product }: { product: Product }) {
	const [price, setPrice] = useState(product.price);
	const [stock, setStock] = useState(product.stock);

	const handleSave = () => {
		console.log("save", product._id, { price, stock });
	};

	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3">
				<img
					src={`http://localhost:5000${product.images?.[0] ?? "/default.jpg"}`}
					alt={product.name}
					className="w-14 h-14 rounded object-cover"
				/>
			</td>

			<td className="py-3 px-3">{product.name}</td>
			<td className="py-3 px-3">{product.brand}</td>
			<td className="py-3 px-3">
				<input
					type="number"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
					className="w-32 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
				/>
			</td>

			<td className="py-3 px-3">
				<input
					type="number"
					value={stock}
					onChange={(e) => setStock(Number(e.target.value))}
					className="w-24 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
				/>
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
