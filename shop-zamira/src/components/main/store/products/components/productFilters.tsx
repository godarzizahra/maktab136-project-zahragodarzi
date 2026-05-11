"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { brands } from "../../home/constants/brandsData";
import PriceFilter from "./priceFilters";

const categories = ["روزمره", "رسمی", "اسپرت"];

export default function ProductFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const selectedBrands = searchParams.get("brand")?.split(",") || [];
	const selectedCategories = searchParams.get("category")?.split(",") || [];
	const toggleFilter = (key: string, value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		const currentValues = params.get(key)?.split(",") || [];

		let updatedValues = [...currentValues];

		if (currentValues.includes(value)) {
			updatedValues = updatedValues.filter((v) => v !== value);
		} else {
			updatedValues.push(value);
		}

		if (updatedValues.length > 0) {
			params.set(key, updatedValues.join(","));
		} else {
			params.delete(key);
		}

		params.set("page", "1");

		router.push(`${pathname}?${params.toString()}`);
	};

	const setPrice = (min: number, max: number) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("minPrice", String(min));
		params.set("maxPrice", String(max));
		params.set("page", "1");

		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="space-y-6">
			<PriceFilter />

			<div>
				<p className="text-sm font-bold mb-2">برند</p>

				<div className="space-y-2 text-sm">
					{brands.map((item) => (
						<label key={item.id} className="flex gap-2 cursor-pointer">
							<input
								type="checkbox"
								checked={selectedBrands.includes(item.name)}
								onChange={() => toggleFilter("brand", item.name)}
							/>
							{item.name}
						</label>
					))}
				</div>
			</div>

			<div>
				<p className="text-sm mb-2 font-bold">دسته بندی</p>

				<div className="space-y-2 text-sm">
					{categories.map((cat) => (
						<label key={cat} className="flex gap-2 cursor-pointer">
							<input
								type="checkbox"
								checked={selectedCategories.includes(cat)}
								onChange={() => toggleFilter("category", cat)}
							/>
							{cat}
						</label>
					))}
				</div>
			</div>
		</div>
	);
}
