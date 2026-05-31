import {
	addToCart,
	clearCartServer,
	getCart,
	removeCartItem,
	updateCartItem,
} from "@/components/main/store/cart/services/cartService";

import type {
	Cart,
	ShippingMethod,
} from "@/components/main/store/cart/types/cart";
import toast from "react-hot-toast";
import { create } from "zustand";

type CartStoreState = {
	cart: Cart | null;
	loading: boolean;
	error: string | null;

	couponCode: string;
	discount: number;
	setCouponCode: (code: string) => void;
	applyCouponLocal: () => void;
	clearCoupon: () => void;

	shippingMethod: ShippingMethod | null;
	setShippingMethod: (method: ShippingMethod) => void;

	subtotal: () => number;
	shippingCost: () => number;
	total: () => number;

	fetchCart: () => Promise<void>;
	addItem: (payload: { productId: string; quantity?: number }) => Promise<void>;
	updateItemQty: (itemId: string, quantity: number) => Promise<void>;
	removeItem: (itemId: string) => Promise<void>;
	clearCart: () => Promise<void>;
};

export const useCartStore = create<CartStoreState>((set, get) => ({
	cart: null,
	loading: false,
	error: null,

	couponCode: "",
	discount: 0,
	setCouponCode: (code) => set({ couponCode: code }),
	clearCoupon: () => set({ couponCode: "", discount: 0 }),

	applyCouponLocal: () => {
		const code = get().couponCode.trim();
		if (!code) {
			toast.error("کد تخفیف را وارد کنید");
			return;
		}

		const subtotal = get().subtotal();

		let discount = 0;
		if (code.toUpperCase() === "OFF10") discount = Math.round(subtotal * 0.1);
		else if (code.toUpperCase() === "OFF20")
			discount = Math.round(subtotal * 0.2);
		else {
			toast.error("کد تخفیف معتبر نیست");
			set({ discount: 0 });
			return;
		}

		set({ discount });
		toast.success("کد تخفیف اعمال شد");
	},

	shippingMethod: {
		id: "pickup",
		title: "تحویل حضوری",
		price: 0,
		description: "به ساعات کاری مجموعه در بخش تماس با ما توجه کنید",
	},

	setShippingMethod: (method) => set({ shippingMethod: method }),

	subtotal: () => {
		const cart = get().cart;
		if (!cart?.items?.length) return 0;
		return cart.items.reduce(
			(sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
			0,
		);
	},

	shippingCost: () => {
		return get().shippingMethod?.price ?? 0;
	},

	total: () => {
		return get().subtotal() + get().shippingCost() - (get().discount ?? 0);
	},

	fetchCart: async () => {
		try {
			set({ loading: true, error: null });
			const cart = await getCart();
			set({ cart, loading: false });
		} catch (e: any) {
			const message =
				e?.response?.data?.message || e?.message || "خطایی رخ داد";
			set({ loading: false, error: message });
			toast.error(message);
		}
	},

	addItem: async (payload) => {
		try {
			set({ loading: true, error: null });
			const cart = await addToCart(payload);
			set({ cart, loading: false });

			toast.success("محصول به سبد خرید اضافه شد");
		} catch (e: any) {
			const message = "برای ثبت سفارش حتما باید لاگین کنید";
			set({ loading: false, error: message });
			toast.error(message);

			throw e;
		}
	},

	updateItemQty: async (itemId, quantity) => {
		try {
			set({ loading: true, error: null });
			const cart = await updateCartItem(itemId, { quantity });
			set({ cart, loading: false });
			toast.success("تعداد محصول بروزرسانی شد");
		} catch (e: any) {
			const message =
				e?.response?.data?.message || e?.message || "خطا در بروزرسانی تعداد";
			set({ loading: false, error: message });
			toast.error(message);
		}
	},

	removeItem: async (itemId) => {
		try {
			set({ loading: true, error: null });
			const cart = await removeCartItem(itemId);
			set({ cart, loading: false });
			toast.success("آیتم از سبد خرید حذف شد");
		} catch (e: any) {
			const message =
				e?.response?.data?.message || e?.message || "خطا در حذف آیتم";
			set({ loading: false, error: message });
			toast.error(message);
		}
	},

	clearCart: async () => {
		try {
			set({ loading: true, error: null });
			const cart = await clearCartServer();

			set({ cart, loading: false, couponCode: "", discount: 0 });
			toast.success("سبد خرید پاک شد");
		} catch (e: any) {
			const message =
				e?.response?.data?.message || e?.message || "خطا در پاک کردن سبد خرید";
			set({ loading: false, error: message });
			toast.error(message);
		}
	},
}));
