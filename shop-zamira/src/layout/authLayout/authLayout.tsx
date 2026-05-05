"use client";
import authImage from "@/assets/image/img-layout-auth.png";
import Image from "next/image";

export default function LayoutAuth() {
	return (
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
	);
}
