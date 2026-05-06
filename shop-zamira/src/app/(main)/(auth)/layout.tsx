"use client";

import LayoutAuth from "@/layout/authLayout/authLayout";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen  grid grid-cols-1 lg:grid-cols-2">
			<div className="flex items-center justify-center px-6 ">
				<div className="w-full max-w-md">{children}</div>
			</div>

			<LayoutAuth />
		</div>
	);
}
