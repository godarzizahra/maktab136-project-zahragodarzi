"use client";

import { useOrders } from "../../hooks/useOrders";
import OrdersHeader from "./ordersHeader";
import OrdersTable from "./ordersTable";

export default function OrdersPageClient() {
	const { orders, loading, error } = useOrders();

	if (loading) return <div>در حال بارگذاری...</div>;

	if (error) return <div>{error}</div>;
	return (
		<div>
			<OrdersHeader />
			<OrdersTable orders={orders} />
		</div>
	);
}
