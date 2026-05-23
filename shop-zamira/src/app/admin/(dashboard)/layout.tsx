"use client";
import HeaderDashboard from "@/layout/dashboardLayout/headerDashboard";
import SidebarDashboard from "@/layout/dashboardLayout/sidebarDashboard";
import { useState } from "react";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="dark flex w-full h-screen overflow-hidden">
			<SidebarDashboard
				isOpen={isSidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>

			<div className="flex-1 flex flex-col h-full overflow-y-auto">
				<div className="p-2">
					<HeaderDashboard onMenuClick={() => setSidebarOpen(true)} />
				</div>

				<main className="p-4 flex-1">{children}</main>
			</div>
		</div>
	);
}
