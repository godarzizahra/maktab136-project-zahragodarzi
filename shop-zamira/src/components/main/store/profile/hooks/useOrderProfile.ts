"use client";

import { useEffect, useMemo, useState } from "react";

import { toOrderViewModel } from "../mapper/orderMapper";
import { getMyOrders } from "../services/getOrdersService";
import type { Order as ApiOrder } from "../types/getOrdersType";

export function useOrders() {
	const [rawOrders, setRawOrders] = useState<ApiOrder[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;

		const fetchOrders = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await getMyOrders();

				if (!mounted) return;
				setRawOrders(response.data ?? []);
			} catch {
				if (!mounted) return;
				setError("دریافت سفارش‌ها با خطا مواجه شد");
			} finally {
				if (!mounted) return;
				setLoading(false);
			}
		};

		fetchOrders();
		return () => {
			mounted = false;
		};
	}, []);

	const orders = useMemo(() => rawOrders.map(toOrderViewModel), [rawOrders]);

	return {
		rawOrders,
		orders,
		loading,
		error,
	};
}
