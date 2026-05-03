import { Product } from "@/components/dashboard/types/dashboardProductsType";

export default function ProductRow({ product }: { product: Product }) {
	// console.log(product.images);

	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3">
				<img
					src={`http://localhost:5000${product.images?.[0]}`}
					alt={product.name}
					className="w-14 h-14 rounded object-cover"
				/>
			</td>
			<td className="py-3 px-3 ">{product.name}</td>
			<td className="py-3 px-3">{product.category}</td>
			<td className="py-3 px-3">{product.price.toLocaleString("fa-IR")}</td>
			<td className="py-3 px-3">{product.stock}</td>
		</tr>
	);
}
