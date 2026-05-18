import {
	getAllOrders,
	updateOrderStatus,
} from "@/components/admin/services/orderService";
import { Order } from "@/components/admin/types/dashboardOrdersType";
import toast from "react-hot-toast";
import { create } from "zustand";

interface OrderState {
	orders: Order[];
	isLoading: boolean;
	error: string | null;
	selectedOrder: Order | null;
	detailsOpen: boolean;
	fetchOrders: () => Promise<void>;
	openDetails: (order: Order) => void;
	closeDetails: () => void;
	updateOrderStatus: (id: string, status: string) => Promise<void>;
}

export const useOrderStore = create<OrderState>((set) => ({
	orders: [],
	isLoading: false,
	error: null,
	selectedOrder: null,
	detailsOpen: false,

	fetchOrders: async () => {
		set({ isLoading: true });
		try {
			const data = await getAllOrders();
			set({ orders: data, isLoading: false });
		} catch {
			toast.error("خطا در دریافت سفارش‌ها");
			set({
				isLoading: false,
				orders: [],
			});
		}
	},
	openDetails: (order) =>
		set({
			selectedOrder: order,
			detailsOpen: true,
		}),

	closeDetails: () =>
		set({
			selectedOrder: null,
			detailsOpen: false,
		}),

	updateOrderStatus: async (id, status) => {
		try {
			await updateOrderStatus(id, status);

			set((state) => ({
				orders: state.orders.map((order) =>
					order._id === id
						? { ...order, status: status as Order["status"] }
						: order,
				),
			}));

			toast.success("وضعیت سفارش بروزرسانی شد");
		} catch {
			toast.error("خطا در بروزرسانی وضعیت سفارش");
		}
	},
}));
