import { Product } from "@/components/admin/types/dashboardProductsType";
import { useProductStore } from "@/store/useProductStore";
import { useState } from "react";
import ProductModal from "./productsModal";
import ProductRow from "./productsRow";

export default function ProductsTable({ products }: { products: Product[] }) {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const deleteProduct = useProductStore((state) => state.deleteProduct);

	const handleDelete = async (product: Product) => {
		await deleteProduct(product._id);
	};

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
							return (
								<ProductRow
									key={p._id}
									product={p}
									onEdit={(product) => setSelectedProduct(product)}
									onDelete={handleDelete}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
			{selectedProduct && (
				<ProductModal
					open={true}
					product={selectedProduct}
					onClose={() => setSelectedProduct(null)}
				/>
			)}
		</div>
	);
}
