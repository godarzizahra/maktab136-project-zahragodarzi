"use client";

import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Obaku from "@/assets/image/brand-obaku.png";
import casio from "@/assets/image/casio.png";
import Citizen from "@/assets/image/citizen.png";
import Esprit from "@/assets/image/esprit.png";
import Jaguar from "@/assets/image/jaguar.png";
import Lacoste from "@/assets/image/lacoste.png";
import Polo from "@/assets/image/polo.jpg";
import Seiko from "@/assets/image/seiko.png";
import Tissot from "@/assets/image/tissot.png";
import Versace from "@/assets/image/versace.png";

const brands = [
	{ name: "Casio", logo: casio },
	{ name: "Citizen", logo: Citizen },
	{ name: "Esprit", logo: Esprit },
	{ name: "Jaguar", logo: Jaguar },
	{ name: "Lacoste", logo: Lacoste },
	{ name: "Obaku", logo: Obaku },
	{ name: "Polo", logo: Polo },
	{ name: "Seiko", logo: Seiko },
	{ name: "Tissot", logo: Tissot },
	{ name: "Versace", logo: Versace },
];

export default function BrandsSection() {
	return (
		<section className="py-12 bg-white rounded-2xl">
			<div className="container mx-auto px-4">
				<h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-10">
					برندهای محبوب
				</h2>

				<Swiper
					modules={[Autoplay]}
					spaceBetween={40}
					slidesPerView={2}
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					breakpoints={{
						640: { slidesPerView: 3 },
						768: { slidesPerView: 5 },
						1024: { slidesPerView: 7 },
					}}
					className="flex items-center"
				>
					{brands.map((brand) => (
						<SwiperSlide key={brand.name} className="flex justify-center">
							<div className="relative w-[120px] h-[60px] filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer">
								<Image
									src={brand.logo}
									alt={brand.name}
									fill
									sizes="(max-width: 768px) 80px, 120px"
									className="object-contain scale-100 hover:scale-110 transition-transform duration-500"
									priority={true}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
