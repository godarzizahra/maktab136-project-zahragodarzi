import toast from "react-hot-toast";
import { create } from "zustand";

import { getDashboardStats } from "@/components/admin/services/dashbboardService";
import {
	DashboardStats,
	SalesItem,
	UsersItem,
} from "@/components/admin/types/dashboardType";

interface DashboardState {
	stats: DashboardStats | null;

	sales: SalesItem[];
	users: UsersItem[];
	isLoading: boolean;
	fetchDashboardData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
	sales: [],
	users: [],
	stats: null,
	isLoading: false,

	fetchDashboardData: async () => {
		set({ isLoading: true });
		try {
			const fetchedStats = await getDashboardStats();

			set({
				stats: fetchedStats,

				isLoading: false,
			});
		} catch (error) {
			console.error("Error fetching dashboard data:", error);
			toast.error("خطا در دریافت اطلاعات داشبورد");
			set({ isLoading: false });
		}
	},
}));
