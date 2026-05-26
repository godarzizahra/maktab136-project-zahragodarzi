"use client";

import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";
import Pagination from "../../../base/pagination";
import PriceInventoryTable from "./PriceInventoryTable";
import PriceInventoryHeader from "./priceInventoryHeader";

export default function PriceInventoryPageClient() {
	const { page, totalPages, setPage } = useProductStore();
	const fetchProducts = useProductStore((state) => state.fetchProducts);
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts, page]);
	return (
		<div>
			<PriceInventoryHeader />
			<PriceInventoryTable />
			<Pagination
				currentPage={page}
				totalPages={totalPages}
				onPageChange={setPage}
			/>
		</div>
	);
}
