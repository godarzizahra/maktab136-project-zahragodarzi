"use client";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brands } from "../constants/brandsData";

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
							<Link
								href={`/products?brand=${encodeURIComponent(brand.name)}`}
								className="relative w-[120px] h-[60px] filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer block"
							>
								<Image
									src={brand.logo}
									alt={brand.name}
									fill
									sizes="(max-width: 768px) 80px, 120px"
									className="object-contain scale-100 hover:scale-110 transition-transform duration-500"
									priority={true}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
