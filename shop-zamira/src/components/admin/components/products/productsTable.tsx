import { useProductStore } from "@/store/useProductStore";
import { useState } from "react";
import { Product } from "../../types/dashboardProductsType";
import ProductRow from "./productsRow";

export default function ProductsTable() {
	const deleteProduct = useProductStore((state) => state.deleteProduct);
	const products = useProductStore((state) => state.products) ?? [];

	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const handleDelete = async (product: Product) => {
		await deleteProduct(product._id);
	};
	console.log("products in table:", products);

	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
			<div className="overflow-x-auto">
				<div className="max-h-[400px] overflow-y-auto custom-scroll">
					<table className="min-w-[800px] w-full text-sm">
						<thead className="bg-[var(--muted)] text-[var(--accent)] sticky top-0">
							<tr>
								<th className="text-right p-3">تصویر محصول</th>
								<th className="text-right p-3">نام</th>
								<th className="text-right p-3">برند</th>
								<th className="text-right p-3">قیمت</th>
								<th className="text-right p-3">موجودی</th>
								<th className="text-right p-3">تاریخ ایجاد</th>
								<th className="text-right p-3">تاریخ ویرایش</th>
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
								products.map((product) => (
									<ProductRow
										key={product._id}
										product={product}
										onEdit={(product) => setSelectedProduct(product)}
										onDelete={handleDelete}
									/>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
