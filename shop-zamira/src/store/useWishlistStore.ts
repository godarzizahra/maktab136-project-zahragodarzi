"use client";

import { Product } from "@/components/admin/types/ProductsType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistStore = {
	items: Product[];
	addItem: (product: Product) => void;
	removeItem: (productId: string | number) => void;
	toggleItem: (product: Product) => void;
	isInWishlist: (productId: string | number) => boolean;
	clearWishlist: () => void;
};

export const useWishlistStore = create<WishlistStore>()(
	persist(
		(set, get) => ({
			items: [],

			addItem: (product) => {
				const exists = get().items.some((item) => item._id === product._id);
				if (exists) return;

				set((state) => ({
					items: [...state.items, product],
				}));
			},

			removeItem: (productId) => {
				set((state) => ({
					items: state.items.filter((item) => item._id !== productId),
				}));
			},

			toggleItem: (product) => {
				const exists = get().items.some((item) => item._id === product._id);

				if (exists) {
					set((state) => ({
						items: state.items.filter((item) => item._id !== product._id),
					}));
				} else {
					set((state) => ({
						items: [...state.items, product],
					}));
				}
			},

			isInWishlist: (productId) => {
				return get().items.some((item) => item._id === productId);
			},

			clearWishlist: () => set({ items: [] }),
		}),
		{
			name: "wishlist-storage",
		},
	),
);
