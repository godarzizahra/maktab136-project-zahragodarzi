"use client";

import Image from "next/image";

import BaseButton from "@/components/base/baseButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../constants/slides";

export default function HeroSwiper() {
	return (
		<section className="w-full h-[320px] md:h-[500px] relative">
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation
				loop
				dir="rtl"
				className="h-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative w-full h-full">
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover"
								priority
							/>

							<div className="absolute inset-0 bg-black/40" />

							<div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white max-w-xl gap-4">
								<h2 className="text-2xl md:text-4xl font-bold">
									{slide.title}
								</h2>

								<p className="text-sm md:text-lg opacity-90">
									{slide.description}
								</p>

								<BaseButton href="/products">مشاهده محصولات </BaseButton>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
