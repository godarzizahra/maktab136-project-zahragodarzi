export interface OrderItem {
	_id: string;
	name: string;
	quantity: number;
	price: number;
	image?: string;
	product?: string;
}

export interface OrderUser {
	_id: string;
	name: string;
	email: string;
}

export interface Order {
	_id: string;
	orderNumber: string;
	user: OrderUser;
	orderItems: OrderItem[];
	totalPrice: number;
	paymentStatus: "paid" | "pending" | "failed";
	status: "processing" | "shipped" | "delivered" | "cancelled";
	createdAt: string;
	updatedAt: string;
}
