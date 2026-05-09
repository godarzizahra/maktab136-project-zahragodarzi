import { Product } from "@/types/ProductsType";
import ProductRow from "./productsRow";

export default function ProductsTable({ products }: { products: Product[] }) {
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
							<th className="text-right p-3"> تاریخ ایجاد </th>
							<th className="text-right p-3">تاریخ ویرایش</th>
							<th className="text-right p-3"></th>
						</tr>
					</thead>

					<tbody>
						{products.map((p) => {
							return <ProductRow key={p._id} product={p} />;
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
