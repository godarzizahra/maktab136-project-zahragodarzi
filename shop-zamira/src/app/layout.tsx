import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: " Zamira فروشگاه ساعت",
	description:
		"خرید آنلاین جدیدترین ساعت‌های مچی مردانه و زنانه از برترین برندهای جهان مانند رولکس، کاسیو و امگا با ضمانت اصالت کالا.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" className={" h-full antialiased"}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
