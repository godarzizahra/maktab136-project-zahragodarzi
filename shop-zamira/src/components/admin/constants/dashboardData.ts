import { DashboardData } from "@/components/dashboard/types/dashboardType";

export const dashboardData: DashboardData = {
	totalUsers: 1234,
	totalOrders: 567,
	totalRevenue: 890123000,
	salesData: [
		{ month: "فروردین", sales: 150 },
		{ month: "اردیبهشت", sales: 220 },
		{ month: "خرداد", sales: 180 },
		{ month: "تیر", sales: 300 },
		{ month: "مرداد", sales: 250 },
		{ month: "شهریور", sales: 380 },
	],
	usersData: [
		{ month: "فروردین", users: 100 },
		{ month: "اردیبهشت", users: 120 },
		{ month: "خرداد", users: 110 },
		{ month: "تیر", users: 150 },
		{ month: "مرداد", users: 130 },
		{ month: "شهریور", users: 180 },
	],
	recentOrders: [
		{
			id: "A-001",
			customer: "علی احمدی",
			amount: "۵,۲۰۰,۰۰۰",
			status: "تکمیل شده",
		},
		{
			id: "A-002",
			customer: "سارا کریمی",
			amount: "۳,۰۰۰,۰۰۰",
			status: "در حال پردازش",
		},
		{
			id: "A-003",
			customer: "محمد رضایی",
			amount: "۸,۵۰۰,۰۰۰",
			status: "لغو شده",
		},
	],
};
