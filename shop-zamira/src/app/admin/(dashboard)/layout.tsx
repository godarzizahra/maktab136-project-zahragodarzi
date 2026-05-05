import HeaderDashboard from "@/layout/dashboardLayout/headerDashboard";
import SidebarDashboard from "@/layout/dashboardLayout/sidebarDashboard";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="dark flex gap-1">
			<SidebarDashboard />

			<div className="flex-1 flex flex-col gap-1">
				<HeaderDashboard />

				<main className="p-1  min-h-screen">{children}</main>
			</div>
		</div>
	);
}
