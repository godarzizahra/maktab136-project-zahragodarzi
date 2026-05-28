"use client";

import SearchInput from "@/components/base/SearchInput";
import { useProductStore } from "@/store/useProductStore";

export default function PriceInventoryHeader() {
	const setSearch = useProductStore((state) => state.setSearch);
	const fetchProducts = useProductStore((state) => state.fetchProducts);
	return (
		<div className="mb-4 flex flex-col mb-2 px-2   ">
			<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
				<h1 className="text-2xl font-bold text-[var(--text-secondary)]">
					قیمت و موجودی
				</h1>

				<div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
					<SearchInput
						placeholder="جستجوی محصول..."
						onChange={(value) => {
							setSearch(value);
							fetchProducts(value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
