export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen">
			<main className="flex-1 p-6">{children}</main>
			<aside className="w-64 bg-black text-white p-4">Sidebar</aside>
		</div>
	);
}
