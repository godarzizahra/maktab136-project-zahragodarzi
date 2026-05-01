import Footer from "@/layout/mainLayout/footer/footer";
import Header from "@/layout/mainLayout/header/header";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
