import ProfileSidebar from "@/layout/profileLayout/profileSidebar";

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container flex flex-row-reverse gap-3 mx-auto px-4 py-8 mt-20">
			<aside className="order-1 md:order-2">
				<ProfileSidebar />
			</aside>
			<main className="order-2 md:order-1">{children}</main>
		</div>
	);
}
