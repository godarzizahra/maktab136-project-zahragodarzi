import SalesChart from "@/components/dashboard/components/dashboard/SalesChart";
import StatCard from "@/components/dashboard/components/dashboard/StatCard";
import UserGrowthChart from "@/components/dashboard/components/dashboard/UserGrowthChart";
import { dashboardData as data } from "@/components/dashboard/constants/dashboardData";

export default function DashboardPage() {
	return (
		<div className=" p-4 bg-[var(--background)] rounded-2xl">
			<section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-3">
				<StatCard
					title="تعداد کاربران"
					value={data.totalUsers.toLocaleString("fa-IR")}
				/>
				<StatCard
					title="تعداد سفارشات"
					value={data.totalOrders.toLocaleString("fa-IR")}
				/>
				<StatCard
					title="فروش کل (ریال)"
					value={data.totalRevenue.toLocaleString("fa-IR")}
				/>
			</section>

			<section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-2">
				<SalesChart data={data.salesData} />
				<UserGrowthChart data={data.usersData} />
			</section>
		</div>
	);
}
