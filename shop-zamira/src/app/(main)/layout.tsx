import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="min-h-full flex flex-col">
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
