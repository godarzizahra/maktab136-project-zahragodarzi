import { formatJalaliDate } from "@/utils/formatJalaliDate";
import { formatPrice } from "@/utils/formatPrice";
import { toPersian } from "@/utils/persianUtils";
import type {
	Order as ApiOrder,
	OrderStatusUI,
	OrderViewModel,
} from "../types/getOrdersType";

function mapStatus(
	apiStatus: ApiOrder["status"],
	isPaid: boolean,
): OrderStatusUI {
	if (apiStatus === "cancelled") return "cancelled";
	if (!isPaid || apiStatus === "pending") return "pending";
	if (apiStatus === "delivered") return "completed";
	return "processing";
}

function shortId(id: string) {
	return id.slice(-6);
}

export function toOrderViewModel(order: ApiOrder): OrderViewModel {
	const status = mapStatus(order.status, order.isPaid);

	return {
		rawId: order._id,
		id: `#${shortId(order._id)}`,
		date: toPersian(formatJalaliDate(order.createdAt)),
		status,
		total: formatPrice(order.totalPrice),
		itemsCount:
			order.orderItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) ??
			0,
		viewHref: `/profile/orders/${order._id}`,
		invoiceHref: `/profile/orders/${order._id}/invoice`,
	};
}
