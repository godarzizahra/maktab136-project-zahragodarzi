"use client";

import { logoutUser } from "@/api/logout";
import { LogOut } from "lucide-react";

import { dashboardCards } from "./dashboard.data";
import DashboardCard from "./dashboardCard";
import DashboardWelcome from "./dashboardWelcome";

type Props = {
	userName?: string;
};

export default function ProfileDashboard({ userName }: Props) {
	return (
		<div className="w-full rounded-2xl bg-white p-5 shadow-sm md:p-6">
			<DashboardWelcome name={userName} onLogout={logoutUser} />

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
