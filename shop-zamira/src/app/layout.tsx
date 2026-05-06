import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
	title: " Zamira فروشگاه ساعت",
	description:
		"خرید آنلاین جدیدترین ساعت‌های مچی مردانه و زنانه از برترین برندهای جهان مانند رولکس، کاسیو و امگا با ضمانت اصالت کالا.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fa" dir="rtl" className=" h-full" suppressHydrationWarning>
			<body className="min-h-full flex flex-col font-vazir">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
