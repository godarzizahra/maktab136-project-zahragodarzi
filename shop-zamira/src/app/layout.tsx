import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fa" dir="rtl" className="h-full">
			<body className="h-full antialiased text-slate-900 bg-white">
				{children}
			</body>
		</html>
	);
}
