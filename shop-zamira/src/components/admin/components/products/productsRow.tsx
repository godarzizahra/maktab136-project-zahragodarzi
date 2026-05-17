import { Pencil, Trash } from "lucide-react";
import { Product } from "../../types/dashboardProductsType";

export default function ProductRow({
	product,
	onEdit,
	onDelete,
}: {
	product: Product;
	onEdit: (p: Product) => void;
	onDelete: (p: Product) => void;
}) {
	// یک تابع کمکی برای اصلاح مسیر
	const getCorrectImageUrl = (url: string) => {
		if (!url) return "/placeholder.png";
		if (url.startsWith("/uploads/products/"))
			return `http://localhost:5000${url}`;
		return `http://localhost:5000${url.replace("/uploads/", "/uploads/products/")}`;
	};
	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3">
				<img
					src={getCorrectImageUrl(product.images?.[0] ?? "")}
					alt={product.name}
					className="w-14 h-14 rounded object-cover"
				/>
			</td>
			<td className="py-3 px-3 ">{product.name}</td>
			<td className="py-3 px-3">{product.brand}</td>
			<td className="py-3 px-3">{product.price.toLocaleString("fa-IR")}</td>
			<td className="py-3 px-3">{product.stock}</td>
			<td className="py-3 px-4">
				{new Date(product.createdAt as string).toLocaleDateString("fa-IR")}
			</td>
			<td className="py-3 px-4">
				{new Date(product.updatedAt).toLocaleDateString("fa-IR")}
			</td>
			<td className="py-3 px-4 text-center">
				<div className="flex items-center justify-center gap-3">
					<button
						className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
						onClick={() => onEdit(product)}
					>
						<Pencil size={16} className="text-blue-600 dark:text-blue-400" />
					</button>

					<button
						className="p-2 rounded-md border border-red-300 dark:border-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 transition"
						onClick={() => onDelete(product)}
					>
						<Trash size={16} className="text-red-600 dark:text-red-400" />
					</button>
				</div>
			</td>
		</tr>
	);
}
