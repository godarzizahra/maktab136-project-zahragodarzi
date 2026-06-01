"use client";

import { useUserOrdersStore } from "@/store/useUserOrdersStore";
import { useMemo } from "react";

type UserAddress = {
	name: string;
	phone: string;
	address: string;
};

export function useLatestShippingAddress() {
	const { rawOrders, isLoading, error } = useUserOrdersStore();

	const address: UserAddress | null = useMemo(() => {
		if (!rawOrders.length) return null;

		const latestOrder = [...rawOrders].sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
		)[0];

		if (!latestOrder?.shippingAddress) return null;

		return {
			name: latestOrder.shippingAddress.name,
			phone: latestOrder.shippingAddress.phone,
			address: latestOrder.shippingAddress.address,
		};
	}, [rawOrders]);

	return {
		address,
		isLoading,
		error,
	};
}
