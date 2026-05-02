import HeaderDashboard from "@/layout/dashboardLayout/headerDashboard";
import SidebarDashboard from "@/layout/dashboardLayout/sidebarDashboard";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col">
			<HeaderDashboard />

			<div className="flex flex-1">
				<SidebarDashboard />

				<main className="flex-1 p-6">{children}</main>
			</div>
		</div>
	);
}
