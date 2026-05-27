export type OrdersResponse = {
	success: boolean;
	count: number;
	data: Order[];
};

export type Order = {
	_id: string;
	createdAt: string;
	updatedAt: string;
	status:
		| "pending"
		| "paid"
		| "processing"
		| "shipped"
		| "delivered"
		| "cancelled"
		| string;
	totalPrice: number;
	paymentMethod: "online" | "cash" | string;
	isPaid: boolean;

	shippingAddress: {
		name: string;
		phone: string;
		address: string;
	};

	orderItems: Array<{
		_id: string;
		name: string;
		quantity: number;
		price: number;
		image: string;
		product?: {
			_id: string;
			name: string;
			price: number;
			images: string[];
			stock: number;
		};
	}>;
};

export type OrderStatusUI =
	| "processing"
	| "completed"
	| "cancelled"
	| "pending";

export type OrderViewModel = {
	id: string;
	rawId: string;
	date: string;
	status: OrderStatusUI;
	total: string;
	itemsCount: number;
	viewHref: string;
	invoiceHref: string;
};
