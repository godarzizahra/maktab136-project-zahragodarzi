"use client";

import authImage from "@/assets/image/img-layout-auth.png";
import Image from "next/image";

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

			<div className="hidden lg:flex relative">
				<Image
					src={authImage}
					alt="Watch image"
					fill
					className="object-cover"
					priority
				/>
				<p className="text-(--accent) absolute left-15 top-28 text-3xl font-bold">
					زمان را متفاوت زندگی کن{" "}
				</p>
				<div className="absolute inset-0 bg-black/40" />
			</div>
		</div>
	);
}
