"use client";

import { logoutUser } from "@/api/logout";
import { LogOut } from "lucide-react";

import { useProfileAccount } from "../../hooks/useProfileAccount";
import { dashboardCards } from "./dashboard.data";
import DashboardCard from "./dashboardCard";
import DashboardWelcome from "./dashboardWelcome";

export default function ProfileDashboard() {
	const { profileForm, loading } = useProfileAccount();
	if (loading) {
		return <div>در حال بارگذاری...</div>;
	}
	return (
		<div className="w-full rounded-2xl bg-white p-5 shadow-sm md:p-6">
			<DashboardWelcome name={profileForm.name} onLogout={logoutUser} />

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{dashboardCards.map((card) => (
					<DashboardCard
						key={card.href}
						title={card.title}
						href={card.href}
						icon={card.icon}
					/>
				))}

				<DashboardCard
					title="خروج"
					icon={LogOut}
					onClick={logoutUser}
					variant="danger"
				/>
			</div>
		</div>
	);
}
