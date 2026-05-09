import { Product } from "@/types/ProductsType";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ _id, name, price, images }: Product) {
	const firstImage = images?.[0]
		? `http://localhost:5000${images[0]}`
		: "/default.jpg";

	const secondImage = images?.[1]
		? `http://localhost:5000${images[1]}`
		: firstImage;

	return (
		<div className="group h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
			<div className="relative aspect-square overflow-hidden bg-gray-50">
				<Link href={`/products/${_id}`} className="block w-full h-full">
					<Image
						src={firstImage}
						alt={name}
						fill
						className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
					/>

					<Image
						src={secondImage}
						alt={name}
						fill
						className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
					/>
				</Link>

				<button
					onClick={(e) => {
						e.preventDefault();
					}}
					className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm text-white py-3 text-sm font-bold
					translate-y-full transition-transform duration-300
					group-hover:translate-y-0
					hover:bg-[#C9A227]"
				>
					افزودن به سبد خرید
				</button>
			</div>

			<div className="p-4 text-center">
				<h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 ">
					{name}
				</h3>

				<p className="mt-2 font-bold text-[#C9A227]">
					{Number(price).toLocaleString("fa-IR")} تومان
				</p>
			</div>
		</div>
	);
}
