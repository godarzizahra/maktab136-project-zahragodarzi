"use client";

import { useEffect, useMemo, useState } from "react";

import type { Order } from "../../types/getOrdersType";
import OrderDetailsModal from "./OrderDetailsModal";
import OrdersMobileList from "./OrdersMobileList";
import OrderDesktopList from "./orderDesktopList";
import { useUserOrdersStore } from "@/store/useUserOrdersStore";

export default function ProfileOrders() {
	const rawOrders = useUserOrdersStore((s) => s.rawOrders);
	const orders = useUserOrdersStore((s) => s.orders);
	const isLoading = useUserOrdersStore((s) => s.isLoading);
	const error = useUserOrdersStore((s) => s.error);
	const fetchOrders = useUserOrdersStore((s) => s.fetchOrders);

	const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

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

				{isLoading ? (
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
						<OrderDesktopList
							orders={orders}
							onOpenDetails={setSelectedOrderId}
						/>

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
