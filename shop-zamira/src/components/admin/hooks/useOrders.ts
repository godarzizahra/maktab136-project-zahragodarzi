"use client";

import { Order } from "@/components/admin/types/dashboardOrdersType";
import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orderService";

export function useOrders() {
	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const data = await getAllOrders();
				setOrders(data);
			} catch (err) {
				setError("خطا در دریافت سفارش‌ها");
			} finally {
				setLoading(false);
			}
		};

		fetchOrders();
	}, []);

	return { orders, loading, error };
}
