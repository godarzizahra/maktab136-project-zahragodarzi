"use client";

import SearchInput from "@/components/base/SearchInput";
import { useProductStore } from "@/store/useProductStore";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function SearchOverlay({ isOpen, onClose }: Props) {
	const router = useRouter();
	const search = useProductStore((state) => state.search);
	const setSearch = useProductStore((state) => state.setSearch);
	const fetchProducts = useProductStore((state) => state.fetchProducts);
	const products = useProductStore((state) => state.products);

	const handleSearch = () => {
		const value = search.trim();

		router.push(
			value ? `/products?search=${encodeURIComponent(value)}` : "/products",
		);
		setSearch("");
		onClose();
	};

	const handleResultClick = (id: string | number) => {
		onClose();
		router.push(`/products/${id}`);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
			<button
				type="button"
				className="absolute inset-0 h-full w-full cursor-default"
				onClick={onClose}
				aria-label="بستن جستجو"
			/>

			<div className="relative mx-auto mt-24 w-[90%] max-w-2xl rounded-2xl bg-[var(--bg-primary)] p-6 shadow-2xl">
				<div className="mb-4 flex items-center justify-between">
					<h2 className="text-lg font-semibold text-white">جستجو</h2>

					<button
						type="button"
						onClick={onClose}
						className="rounded-full p-2 text-white transition hover:bg-[var(--bg-secondary)]"
						aria-label="بستن"
					>
						<X size={20} />
					</button>
				</div>

				<SearchInput
					value={search}
					placeholder="جستجوی محصول..."
					onChange={(value) => {
						setSearch(value);
						fetchProducts(value);
					}}
					onEnter={handleSearch}
				/>

				<div className="mt-4 max-h-80 space-y-3 overflow-y-auto">
					{products.length > 0 ? (
						products.map((product) => (
							<button
								key={product._id}
								type="button"
								onClick={() => handleResultClick(product._id)}
								className="block w-full rounded-lg p-3 text-right hover:bg-[var(--bg-secondary)] bg-[#fff]"
							>
								{product.name}
							</button>
						))
					) : (
						<p className="text-sm text-[var(--text-secondary)]">
							نتیجه‌ای یافت نشد!
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
