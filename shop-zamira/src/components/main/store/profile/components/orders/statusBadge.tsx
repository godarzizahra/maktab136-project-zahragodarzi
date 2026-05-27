"use client";

import { getStatusClass, getStatusLabel } from "../../constants/orderStatus";
import { OrderStatusUI } from "../../types/getOrdersType";

export function StatusBadge({ status }: { status: OrderStatusUI }) {
	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(status)}`}
		>
			{getStatusLabel(status)}
		</span>
	);
}
