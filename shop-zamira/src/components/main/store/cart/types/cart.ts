import { Product } from "@/components/admin/types/ProductsType";

export type CartItem = {
	_id: string;
	product: Product;
	quantity: number;
	price: number;
};

export type Cart = {
	_id: string;
	user: string;
	items: CartItem[];
	totalPrice: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type CartApiResponse = {
	success: boolean;
	message: string;
	data: Cart;
};

export type ShippingMethod = {
	id: string;
	title: string;
	price: number;
	description?: string;
};

export type CartTotals = {
	subtotal: number;
	discount: number;
	shipping: number;
	total: number;
};

export type CartState = {
	items: CartItem[];
	couponCode: string;
	appliedCoupon?: string;
	shippingMethod?: ShippingMethod;
	totals: CartTotals;
};
