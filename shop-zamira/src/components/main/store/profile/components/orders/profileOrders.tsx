"use client";

import { useMemo, useState } from "react";
import { useOrders } from "../../hooks/useOrderProfile";
import type { Order } from "../../types/getOrdersType";
import OrderDetailsModal from "./OrderDetailsModal";
import OrdersMobileList from "./OrdersMobileList";
import { StatusBadge } from "./statusBadge";

export default function ProfileOrders() {
	const { rawOrders, orders, loading, error } = useOrders();
	const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

	const selectedOrder = useMemo<Order | null>(() => {
		if (!selectedOrderId) return null;
		return rawOrders.find((order) => order._id === selectedOrderId) ?? null;
	}, [rawOrders, selectedOrderId]);

	return (
		<>
			<div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 px-4 py-4 sm:px-6">
					<h1 className="text-right text-lg font-bold text-slate-800">
						سفارش‌ها
					</h1>
				</div>

				{loading ? (
					<div className="px-4 py-10 text-center text-sm text-gray-500 sm:px-6">
						در حال دریافت سفارش‌ها...
					</div>
				) : error ? (
					<div className="px-4 py-10 text-center text-sm text-red-600 sm:px-6">
						{error}
					</div>
				) : orders.length === 0 ? (
					<div className="px-4 py-10 text-center text-sm text-gray-500 sm:px-6">
						هنوز سفارشی ثبت نشده است.
					</div>
				) : (
					<>
						{/* Desktop */}
						<div className="hidden w-full lg:block">
							<div className="grid grid-cols-[140px_180px_160px_220px_1fr] items-center gap-4 border-b border-gray-100 px-6 py-4 text-sm font-semibold text-slate-700">
								<div className="text-right">سفارش</div>
								<div className="text-right">تاریخ</div>
								<div className="text-right">وضعیت</div>
								<div className="text-right">مجموع</div>
								<div className="text-right">عملیات ها</div>
							</div>

							{orders.map((order) => (
								<div
									key={order.rawId}
									className="grid grid-cols-[140px_180px_160px_220px_1fr] items-center gap-4 px-6 py-4 text-sm text-slate-700"
								>
									<div className="text-right font-medium text-slate-800">
										{order.id}
									</div>
									<div className="text-right">{order.date}</div>
									<div className="text-right">
										<StatusBadge status={order.status} />
									</div>
									<div className="text-right">
										<span className="font-bold text-[#c8a44d]">
											{order.total}
										</span>
									</div>

									<div className="flex justify-start gap-2">
										<button
											onClick={() => setSelectedOrderId(order.rawId)}
											className="inline-flex items-center justify-center rounded-md bg-[#d4b055] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#c6a146]"
										>
											نمایش
										</button>
									</div>
								</div>
							))}
						</div>

						<OrdersMobileList
							orders={orders}
							onOpenDetails={setSelectedOrderId}
						/>
					</>
				)}
			</div>

			<OrderDetailsModal
				open={!!selectedOrder}
				order={selectedOrder}
				onClose={() => setSelectedOrderId(null)}
			/>
		</>
	);
}
