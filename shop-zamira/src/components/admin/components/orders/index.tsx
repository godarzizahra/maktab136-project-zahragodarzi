"use client";

import { mockOrders } from "../../constants/mockOrders";
import OrdersHeader from "./ordersHeader";
import OrdersTable from "./ordersTable";

export default function OrdersPageClient() {
	return (
		<div>
			<OrdersHeader />
			<OrdersTable orders={mockOrders} />
		</div>
	);
}
