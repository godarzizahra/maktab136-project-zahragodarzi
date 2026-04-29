import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import { ThemeProvider } from "next-themes";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="min-h-full flex flex-col">
				<ThemeProvider attribute={"class"} defaultTheme="light" enableSystem>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
