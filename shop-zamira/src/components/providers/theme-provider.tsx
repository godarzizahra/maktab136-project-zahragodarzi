"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: any) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="light"
			enableSystem={false}
			disableTransitionOnChange // این گزینه به بهبود عملکرد کمک می‌کند
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
