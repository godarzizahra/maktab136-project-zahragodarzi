"use client";

import { MapPin, Phone, User } from "lucide-react";
import { useLatestShippingAddress } from "../../hooks/useProfileAddressFromOrders";

export default function ProfileAddress() {
	const { address, loading, error } = useLatestShippingAddress();

	if (loading) {
		return (
			<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
				<div className="py-10 text-center text-sm text-gray-500">
					در حال دریافت آدرس...
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
				<div className="py-10 text-center text-sm text-red-600">{error}</div>
			</div>
		);
	}

	return (
		<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
			<div className="text-right">
				<h1 className="mb-6 text-2xl font-bold text-slate-900">آدرس شما</h1>

				{address ? (
					<div className="space-y-3 text-base leading-8 text-slate-700">
						<p className="flex items-center justify-end gap-2">
							<span>{address.name}</span>
							<User size={18} className="text-slate-400" />
						</p>

						<p className="flex items-center justify-end gap-2">
							<span>{address.phone}</span>
							<Phone size={18} className="text-slate-400" />
						</p>

						<p className="flex items-start justify-end gap-2 break-words">
							<span>{address.address}</span>
							<MapPin size={18} className="mt-1 shrink-0 text-slate-400" />
						</p>
					</div>
				) : (
					<div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center">
						<div className="mb-3 flex justify-center">
							<MapPin className="text-gray-400" size={28} />
						</div>
						<p className="text-sm text-slate-600">
							هنوز آدرسی از سفارش‌های شما پیدا نشد.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
