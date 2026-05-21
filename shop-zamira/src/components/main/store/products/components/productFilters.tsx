"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { brands } from "../../home/constants/brandsData";
import PriceFilter from "./priceFilters";

import Accordion from "@/components/base/accordion";
import { useFiltersDrawer } from "../hooks/useFiltersDrawer";

const categories = ["روزمره", "رسمی", "اسپرت", "ورزشی"];

export default function ProductFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { closeDrawer } = useFiltersDrawer();
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
		closeDrawer();
	};

	const setPrice = (min: number, max: number) => {
		const params = new URLSearchParams(searchParams.toString());

		params.set("minPrice", String(min));
		params.set("maxPrice", String(max));
		params.set("page", "1");

		router.push(`${pathname}?${params.toString()}`);
		closeDrawer();
	};

	return (
		<div className="space-y-8 pb-40">
			<Accordion title="محدوده قیمت" defaultOpen>
				<PriceFilter />
			</Accordion>

			<Accordion title="برند">
				<div className="space-y-3 text-sm mt-2">
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
			</Accordion>

			<Accordion title="دسته‌بندی">
				<div className="space-y-3 text-sm mt-2">
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
			</Accordion>
		</div>
	);
}
