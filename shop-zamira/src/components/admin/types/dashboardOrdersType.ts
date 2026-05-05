export interface OrderItem {
	_id: string;
	productName: string;
	quantity: number;
	price: number;
}

export interface Order {
	_id: string;
	orderNumber: string;
	user: {
		_id: string;
		name: string;
		email: string;
	};
	items: OrderItem[];
	finalAmount: number;
	paymentStatus: "paid" | "pending" | "failed";
	status: "processing" | "shipped" | "delivered" | "cancelled";
	createdAt: string;
	updatedAt: string;
}
