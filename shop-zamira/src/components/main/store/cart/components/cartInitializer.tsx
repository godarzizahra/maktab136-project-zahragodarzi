"use client";

import { useCartStore } from "@/store/useCartStore";
import { useEffect } from "react";

export default function CartInitializer() {
	const fetchCart = useCartStore((state) => state.fetchCart);

	useEffect(() => {
		fetchCart();
	}, [fetchCart]);

	return null;
}
