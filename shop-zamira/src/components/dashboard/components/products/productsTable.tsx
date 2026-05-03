import { Product } from "@/components/dashboard/types/dashboardProductsType";
import ProductRow from "./productsRow";

export default function ProductsTable({ products }: { products: Product[] }) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
			<table className="w-full text-sm">
				<thead className="bg-[var(--muted)] text-[var(--accent)]">
					<tr>
						<th className="text-right p-3">تصویر محصول</th>
						<th className="text-right p-3">نام</th>
						<th className="text-right p-3">برند</th>
						<th className="text-right p-3">قیمت</th>
						<th className="text-right p-3">موجودی</th>
					</tr>
				</thead>

				<tbody>
					{products.map((p) => (
						<ProductRow key={p.id} product={p} />
					))}
				</tbody>
			</table>
		</div>
	);
}
