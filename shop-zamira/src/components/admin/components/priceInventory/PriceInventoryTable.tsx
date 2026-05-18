import { useProductStore } from "@/store/useProductStore";
import PriceInventoryRow from "./priceInventoryRow";

export default function PriceInventoryTable() {
	const products = useProductStore((state) => state.products);
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
			<div className="max-h-[400px] overflow-y-auto custom-scroll">
				<table className="w-full text-sm">
					<thead className="bg-[var(--muted)] text-[var(--accent)] sticky top-0">
						<tr>
							<th className="text-right p-3">تصویر محصول</th>
							<th className="text-right p-3">نام</th>
							<th className="text-right p-3">برند</th>
							<th className="text-right p-3">قیمت</th>
							<th className="text-right p-3">موجودی</th>
							<th className="text-right p-3">وضعیت </th>
							<th className="text-right p-3"></th>
						</tr>
					</thead>

					<tbody>
						{products.length === 0 ? (
							<tr>
								<td colSpan={8} className="text-center py-6 text-gray-500">
									محصولی یافت نشد
								</td>
							</tr>
						) : (
							products.map((p) => {
								return <PriceInventoryRow key={p._id} product={p} />;
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
