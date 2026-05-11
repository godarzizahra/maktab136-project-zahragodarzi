"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const MIN_PRICE = 0;
const MAX_PRICE = 50000000;
const STEP = 100000;

function formatPrice(value: number) {
	return new Intl.NumberFormat("fa-IR").format(value);
}

export default function PriceFilter() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const initialMin = Number(searchParams.get("minPrice")) || MIN_PRICE;
	const initialMax = Number(searchParams.get("maxPrice")) || MAX_PRICE;

	const [minPrice, setMinPrice] = useState(initialMin);
	const [maxPrice, setMaxPrice] = useState(initialMax);

	const minPercent = useMemo(
		() => ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100,
		[minPrice],
	);

	const maxPercent = useMemo(
		() => ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100,
		[maxPrice],
	);

	const updateURL = (min: number, max: number) => {
		const params = new URLSearchParams(searchParams.toString());

		if (min <= MIN_PRICE) params.delete("minPrice");
		else params.set("minPrice", String(min));

		if (max >= MAX_PRICE) params.delete("maxPrice");
		else params.set("maxPrice", String(max));

		params.set("page", "1");

		router.push(`${pathname}?${params.toString()}`);
	};

	const updateMin = (value: number) => {
		if (Number.isNaN(value)) return;
		const newMin = Math.min(value, maxPrice - STEP);
		setMinPrice(newMin);
		updateURL(newMin, maxPrice);
	};

	const updateMax = (value: number) => {
		if (Number.isNaN(value)) return;
		const newMax = Math.max(value, minPrice + STEP);
		setMaxPrice(newMax);
		updateURL(minPrice, newMax);
	};

	const clearFilter = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete("minPrice");
		params.delete("maxPrice");
		params.set("page", "1");

		setMinPrice(MIN_PRICE);
		setMaxPrice(MAX_PRICE);

		router.push(`${pathname}?${params.toString()}`);
	};

	useEffect(() => {
		const urlMin = Number(searchParams.get("minPrice")) || MIN_PRICE;
		const urlMax = Number(searchParams.get("maxPrice")) || MAX_PRICE;

		setMinPrice(urlMin);
		setMaxPrice(urlMax);
	}, [searchParams]);

	return (
		<div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
			<div className="mb-4 flex items-center justify-between">
				<h3 className="text-sm font-semibold text-gray-900">محدوده قیمت</h3>

				<button
					onClick={clearFilter}
					className="text-xs text-gray-400 transition hover:text-gray-700"
				>
					حذف فیلتر
				</button>
			</div>

			<div className="mb-4 flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
				<div className="text-xs text-gray-500">از</div>
				<div className="text-sm font-semibold text-gray-900">
					{formatPrice(minPrice)}
				</div>
				<div className="text-xs text-gray-400">تا</div>
				<div className="text-sm font-semibold text-gray-900">
					{formatPrice(maxPrice)}
				</div>
			</div>

			<div className="relative h-8">
				<div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-gray-200" />
				<div
					className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-black"
					style={{
						left: `${minPercent}%`,
						right: `${100 - maxPercent}%`,
					}}
				/>

				<input
					type="range"
					min={MIN_PRICE}
					max={MAX_PRICE}
					step={STEP}
					value={minPrice}
					onChange={(e) => updateMin(Number(e.target.value))}
					className="price-range absolute top-1/2 w-full -translate-y-1/2"
				/>

				<input
					type="range"
					min={MIN_PRICE}
					max={MAX_PRICE}
					step={STEP}
					value={maxPrice}
					onChange={(e) => updateMax(Number(e.target.value))}
					className="price-range absolute top-1/2 w-full -translate-y-1/2"
				/>
			</div>

			<style jsx>{`
				.price-range {
					pointer-events: none;
					background: transparent;
					-webkit-appearance: none;
					appearance: none;
				}

				.price-range::-webkit-slider-thumb {
					pointer-events: auto;
					-webkit-appearance: none;
					appearance: none;
					width: 16px;
					height: 16px;
					border-radius: 9999px;
					background: #000;
					border: 3px solid #fff;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
					cursor: pointer;
				}

				.price-range::-moz-range-thumb {
					pointer-events: auto;
					width: 16px;
					height: 16px;
					border-radius: 9999px;
					background: #000;
					border: 3px solid #fff;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
					cursor: pointer;
				}

				.price-range::-webkit-slider-runnable-track {
					height: 1px;
					background: transparent;
				}

				.price-range::-moz-range-track {
					height: 1px;
					background: transparent;
				}
			`}</style>
		</div>
	);
}
