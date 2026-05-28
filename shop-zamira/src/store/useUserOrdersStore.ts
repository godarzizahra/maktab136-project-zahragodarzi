import toast from "react-hot-toast";
import { create } from "zustand";

import { getMyOrders } from "@/components/main/store/profile/services/getOrdersService";
import type {
	Order as ApiOrder,
	OrderStatusUI,
	OrderViewModel,
} from "@/components/main/store/profile/types/getOrdersType";
import { formatJalaliDate } from "@/utils/formatJalaliDate";
import { formatPrice } from "@/utils/formatPrice";
import { toPersian } from "@/utils/persianUtils";

interface UserOrdersState {
	rawOrders: ApiOrder[];
	orders: OrderViewModel[];
	isLoading: boolean;
	error: string | null;
	fetchOrders: () => Promise<void>;
}

function mapStatus(apiStatus: ApiOrder["status"]): OrderStatusUI {
	if (apiStatus === "cancelled") return "cancelled";
	if (apiStatus === "pending") return "pending";
	if (apiStatus === "delivered") return "completed";
	return "processing";
}

function shortId(id: string) {
	return id.slice(-6);
}

function toOrderViewModel(order: ApiOrder): OrderViewModel {
	return {
		rawId: order._id,
		id: `#${shortId(order._id)}`,
		date: toPersian(formatJalaliDate(order.createdAt)),
		status: mapStatus(order.status),
		total: formatPrice(order.totalPrice),
		itemsCount:
			order.orderItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) ??
			0,
		viewHref: `/profile/orders/${order._id}`,
		invoiceHref: `/profile/orders/${order._id}/invoice`,
	};
}

export const useUserOrdersStore = create<UserOrdersState>((set) => ({
	rawOrders: [],
	orders: [],
	isLoading: false,
	error: null,

	fetchOrders: async () => {
		set({ isLoading: true, error: null });

		try {
			const res = await getMyOrders();
			const rawOrders = res.data || [];
			const orders = rawOrders.map(toOrderViewModel);

			set({
				rawOrders,
				orders,
				isLoading: false,
				error: null,
			});
		} catch {
			toast.error("خطا در دریافت سفارش‌های شما");
			set({
				rawOrders: [],
				orders: [],
				isLoading: false,
				error: "خطا در دریافت سفارش‌های شما",
			});
		}
	},
}));
