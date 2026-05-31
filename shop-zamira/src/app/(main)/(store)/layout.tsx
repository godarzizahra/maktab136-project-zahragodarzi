import CartInitializer from "@/components/main/store/cart/components/cartInitializer";
import Footer from "@/layout/mainLayout/footer/footer";
import Header from "@/layout/mainLayout/header/components/header";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-full flex flex-col">
			<Header />
			<main className=" flex-1 ">{children}</main>
			<CartInitializer />
			<Footer />
		</div>
	);
}
