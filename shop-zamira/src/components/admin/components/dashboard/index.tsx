"use client";
import SalesChart from "@/components/admin/components/dashboard/SalesChart";
import StatCard from "@/components/admin/components/dashboard/StatCard";
import UserGrowthChart from "@/components/admin/components/dashboard/UserGrowthChart";
import { dashboardData as data } from "@/components/admin/constants/dashboardData";
import { useDashboardStore } from "@/store/useDashboardStore";
import { useEffect } from "react";

export default function DashboardPage() {
	const { stats, sales, users, isLoading, fetchDashboardData } =
		useDashboardStore();

	useEffect(() => {
		fetchDashboardData();
	}, [fetchDashboardData]);

	if (isLoading) return <p>در حال بارگذاری اطلاعات داشبورد...</p>;
	return (
		<div className=" p-4 bg-[var(--background)] rounded-2xl">
			<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-3">
				<StatCard
					title="کل فروش"
					value={stats?.totalSales.toLocaleString() ?? "۰"}
				/>
				<StatCard
					title="کل کاربران"
					value={stats?.totalUsers.toLocaleString() ?? "۰"}
				/>
				<StatCard
					title="کل سفارشات"
					value={stats?.totalOrders.toLocaleString() ?? "۰"}
				/>
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-2">
				<SalesChart data={data.salesData} />
				<UserGrowthChart data={data.usersData} />
			</section>
		</div>
	);
}
