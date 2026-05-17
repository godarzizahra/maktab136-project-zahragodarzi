import SearchInput from "@/components/base/SearchInput";
import { useProductStore } from "@/store/useProductStore";
import { Plus } from "lucide-react";
import { useState } from "react";
import ProductModal from "./productsModal";

export default function ProductsHeader() {
	const [open, setOpen] = useState(false);
	const setSearch = useProductStore((state) => state.setSearch);
	const fetchProducts = useProductStore((state) => state.fetchProducts);

	return (
		<div className="flex items-center justify-between mb-2 px-2">
			<h1 className="text-2xl font-bold text-[var(--border)]">محصولات</h1>

			<div className="flex items-center gap-3 w-full sm:w-auto">
				<SearchInput
					placeholder="جستجوی محصول..."
					onChange={(value) => {
						setSearch(value);
						fetchProducts(value);
					}}
				/>

				<button
					onClick={() => setOpen(true)}
					className="bg-[var(--accent)] text-black px-4 py-2 rounded-lg text-sm flex items-center gap-1 hover:opacity-90 transition"
				>
					<Plus size={20} />
					<span>افزودن</span>
				</button>
			</div>
			<ProductModal open={open} onClose={() => setOpen(false)} />
		</div>
	);
}
