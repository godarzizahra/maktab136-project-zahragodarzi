"use client";

import { useOrderStore } from "@/store/useOrderStore";

import { useEffect } from "react";
import OrderDetailsModal from "./orderDetailsModal";
import OrdersHeader from "./ordersHeader";
import OrdersTable from "./ordersTable";

export default function OrdersPageClient() {
	const { orders, isLoading, error, fetchOrders } = useOrderStore();

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);
	if (isLoading) return <div>در حال بارگذاری...</div>;

	if (error) return <div>{error}</div>;
	return (
		<div>
			<OrdersHeader />
			<OrdersTable orders={orders} />
			<OrderDetailsModal />
		</div>
	);
}
