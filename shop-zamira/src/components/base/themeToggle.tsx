"use client";

import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="hover:text-(--accent) transition px-2"
			aria-label="تغییر تم"
		>
			{theme === "dark" ? <Sun size={26} /> : <MoonIcon size={26} />}
		</button>
	);
}
