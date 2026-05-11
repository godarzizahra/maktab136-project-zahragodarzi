import { API_BASE_URL } from "@/api/baseUrl";
import { Product } from "@/types/ProductsType";
import Image from "next/image";
import Link from "next/link";
import BtnProductCard from "./btnProductCard";

interface Props {
	product: Product;
}
export default function ProductCard({ product }: Props) {
	const firstImage = product.images?.[0]
		? `${API_BASE_URL}${product.images[0]}`
		: "/default.jpg";

	const secondImage = product.images?.[1]
		? `${API_BASE_URL}${product.images[1]}`
		: firstImage;

	return (
		<div className="group h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
			<div className="relative aspect-square overflow-hidden bg-gray-50">
				<Link href={`/products/${product._id}`} className="block w-full h-full">
					<Image
						src={firstImage}
						alt={product.name}
						fill
						className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
					/>

					<Image
						src={secondImage}
						alt={product.name}
						fill
						className="relative object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
					/>
				</Link>

				<BtnProductCard />
			</div>

			<div className="p-4 text-center">
				<h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 ">
					{product.name}
				</h3>

				<p className="mt-2 font-bold text-[#C9A227]">
					{Number(product.price).toLocaleString("fa-IR")} تومان
				</p>
			</div>
		</div>
	);
}
