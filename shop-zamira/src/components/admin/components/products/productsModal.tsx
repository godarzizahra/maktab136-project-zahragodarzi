"use client";

import ProductForm from "./productForm";

type Props = {
	open: boolean;
	onClose: () => void;
	product?: any;
};

export default function ProductModal({ open, onClose, product }: Props) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
			<div className="w-full max-w-3xl rounded-2xl bg-white border border-[var(--border)] p-6">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-bold text-[var(--muted)] ">
						{product ? "ویرایش محصول" : "افزودن محصول"}
					</h2>

					<button onClick={onClose} className="text-[var(--muted)] text-xl">
						✕
					</button>
				</div>

				<ProductForm product={product} onClose={onClose} />
			</div>
		</div>
	);
}
