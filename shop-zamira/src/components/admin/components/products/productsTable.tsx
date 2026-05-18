import { useProductStore } from "@/store/useProductStore";
import { useState } from "react";
import { Product } from "../../types/dashboardProductsType";
import ConfirmModal from "./confirmModal";
import ProductModal from "./productsModal";
import ProductRow from "./productsRow";

export default function ProductsTable() {
	const deleteProduct = useProductStore((state) => state.deleteProduct);
	const products = useProductStore((state) => state.products) ?? [];
	const [editOpen, setEditOpen] = useState(false);

	const [selectedProduct, setSelectedProduct] = useState<Product>();

	const handleDelete = async (product: Product) => {
		await deleteProduct(product._id);
	};
	const [confirmOpen, setConfirmOpen] = useState(false);

	const handleDeleteClick = (product: Product) => {
		setSelectedProduct(product);
		setConfirmOpen(true);
	};

	const handleConfirmDelete = async () => {
		if (selectedProduct) {
			await handleDelete(selectedProduct);
		}
		setConfirmOpen(false);
	};

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
										onEdit={(product) => {
											setSelectedProduct(product);
											setEditOpen(true);
										}}
										onDelete={handleDeleteClick}
									/>
								))
							)}
						</tbody>
					</table>
				</div>
			</div>
			<ConfirmModal
				isOpen={confirmOpen}
				message={`آیا از حذف "${selectedProduct?.name}" مطمئن هستید؟`}
				onConfirm={handleConfirmDelete}
				onCancel={() => setConfirmOpen(false)}
			/>
			<ProductModal
				open={editOpen}
				product={selectedProduct}
				onClose={() => {
					setEditOpen(false);
					setSelectedProduct(undefined);
				}}
			/>
		</div>
	);
}
