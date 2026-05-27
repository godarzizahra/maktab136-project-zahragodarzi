"use client";

import { useWishlistStore } from "@/store/useWishlistStore";
import { Heart, X } from "lucide-react";
import Link from "next/link";
import ProductCard from "../../../products/components/productscard";

export default function ProfileWishlist() {
	const wishlistItems = useWishlistStore((s) => s.items);
	const removeItem = useWishlistStore((s) => s.removeItem);

	const hasItems = wishlistItems.length > 0;

	return (
		<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
			<div className="mb-6 text-right">
				<h1 className="text-xl font-bold text-slate-900 md:text-2xl">
					علاقه‌مندی‌ها
				</h1>
				<p className="mt-2 text-sm leading-7 text-slate-600">
					محصولاتی که به لیست علاقه‌مندی‌های خود اضافه کرده‌اید در این بخش نمایش
					داده می‌شوند.
				</p>
			</div>

			{hasItems ? (
				<div className="space-y-4">
					<div className="grid grid-cols-4 gap-3">
						{wishlistItems.map((item) => (
							<div key={String(item._id)} className="relative">
								<button
									type="button"
									onClick={() => removeItem(item._id)}
									className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
									aria-label="حذف از علاقه‌مندی‌ها"
								>
									<X size={18} />
								</button>

								<ProductCard product={item} />
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
					<div className="mb-4 flex justify-center">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f1df]">
							<Heart className="text-[#c8a44d]" size={26} />
						</div>
					</div>

					<h2 className="text-lg font-bold text-slate-800">
						لیست علاقه‌مندی‌های شما خالی است
					</h2>

					<p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-600">
						هنوز محصولی به علاقه‌مندی‌های خود اضافه نکرده‌اید. می‌توانید از
						فروشگاه بازدید کرده و محصولات موردنظر خود را ذخیره کنید.
					</p>

					<Link
						href="/"
						className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#d4b055] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#c6a146]"
					>
						مشاهده فروشگاه
					</Link>
				</div>
			)}
		</div>
	);
}
