"use client";

import { useProducts } from "@/hooks/useProducts";

import Pagination from "../products/pagination";
import PriceInventoryTable from "./PriceInventoryTable";
import PriceInventoryHeader from "./priceInventoryHeader";

export default function PriceInventoryPageClient() {
	const { products, loading, page, totalPages, setPage } = useProducts();

	if (loading)
		return (
			<div className="flex justify-center items-center w-full pt-10 font-bold">
				<p>...Loading</p>
			</div>
		);

	return (
		<div>
			<PriceInventoryHeader />
			<PriceInventoryTable products={products} />
			<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
		</div>
	);
}
