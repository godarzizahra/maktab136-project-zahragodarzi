"use client";

import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";
import Pagination from "../products/pagination";
import PriceInventoryTable from "./PriceInventoryTable";
import PriceInventoryHeader from "./priceInventoryHeader";

export default function PriceInventoryPageClient() {
	const { page, totalPages, setPage } = useProductStore();
	const fetchProducts = useProductStore((state) => state.fetchProducts);
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	return (
		<div>
			<PriceInventoryHeader />
			<PriceInventoryTable />
			<Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
		</div>
	);
}
