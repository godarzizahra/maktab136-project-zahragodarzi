"use client";

import { API_BASE_URL } from "@/api/baseUrl";
import Image from "next/image";
import { useState } from "react";

interface Props {
	images: string[];
}

export default function ProductGallery({ images }: Props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [zoom, setZoom] = useState(false);
	const [position, setPosition] = useState({ x: 50, y: 50 });

	const activeImage = images?.[activeIndex]
		? `${API_BASE_URL}${images[activeIndex]}`
		: "";

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		const rect = e.currentTarget.getBoundingClientRect();

		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setPosition({ x, y });
	}

	return (
		<div className="w-full h-100 flex flex-row-reverse gap-4 lg:max-w-[500px] lg:mx-auto">
			<div
				className="relative w-full aspect-square overflow-hidden rounded-xl border"
				onMouseEnter={() => setZoom(true)}
				onMouseLeave={() => setZoom(false)}
				onMouseMove={handleMouseMove}
			>
				<Image
					src={activeImage}
					alt="product"
					fill
					sizes="(max-width:768px) 100vw, 50vw"
					className="object-cover transition-transform duration-300"
					style={{
						transform: zoom ? "scale(2)" : "scale(1)",
						transformOrigin: `${position.x}% ${position.y}%`,
					}}
				/>
			</div>

			<div className="flex flex-col gap-3 ">
				{images?.map((img, index) => {
					const url = `${API_BASE_URL}${img}`;

					return (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border
                ${activeIndex === index ? "border-black" : "border-gray-200"}`}
						>
							<Image
								src={url}
								alt={`thumb-${index}`}
								fill
								className="object-cover"
							/>
						</button>
					);
				})}
			</div>
		</div>
	);
}
