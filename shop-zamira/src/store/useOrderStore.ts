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
	page: number;
	totalPages: number;
	total: number;
	setPage: (page: number) => void;
	fetchOrders: (page?: number) => Promise<void>;
	openDetails: (order: Order) => void;
	closeDetails: () => void;
	updateOrderStatus: (id: string, status: string) => Promise<void>;
}

export const useOrderStore = create<OrderState>((set, get) => ({
	orders: [],
	isLoading: false,
	error: null,
	selectedOrder: null,
	detailsOpen: false,
	page: 1,
	totalPages: 1,
	total: 0,

	setPage: (page) => set({ page }),

	fetchOrders: async (pageArg) => {
		const page = pageArg ?? get().page;

		set({ isLoading: true, error: null });

		try {
			const res = await getAllOrders(page, 10);

			set({
				orders: res.data || [],
				page: res.page || 1,
				totalPages: res.pages || 1,
				total: res.total || 0,
				isLoading: false,
			});
		} catch {
			toast.error("خطا در دریافت سفارش‌ها");
			set({
				isLoading: false,
				orders: [],
				error: "خطا در دریافت سفارش‌ها",
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
