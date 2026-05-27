import ProfileSidebar from "@/layout/profileLayout/profileSidebar";

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mt-20 px-4 py-6 md:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-[1400px]">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
					<aside className="w-full">
						<ProfileSidebar />
					</aside>

					<main className="min-w-0 w-full">{children}</main>
				</div>
			</div>
		</div>
	);
}
