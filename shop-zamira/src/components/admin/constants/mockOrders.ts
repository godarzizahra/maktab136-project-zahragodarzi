import { Order } from "@/components/dashboard/types/dashboardOrdersType";

export const mockOrders: Order[] = [
	{
		_id: "1",
		orderNumber: "ORD-2026001",
		user: { _id: "u1", name: "علی رضایی", email: "ali@example.com" },
		items: [
			{ _id: "i1", productName: "کیبورد مکانیکی", quantity: 1, price: 1800000 },
			{ _id: "i2", productName: "ماوس بی‌سیم", quantity: 2, price: 500000 },
		],
		finalAmount: 2800000,
		paymentStatus: "paid",
		status: "delivered",
		createdAt: "2026-04-20T12:30:00Z",
		updatedAt: "2026-04-23T15:40:00Z",
	},
	{
		_id: "2",
		orderNumber: "ORD-2026002",
		user: { _id: "u2", name: "نگار محمدی", email: "negar@example.com" },
		items: [
			{ _id: "i3", productName: "هدست گیمینگ", quantity: 1, price: 3500000 },
		],
		finalAmount: 3500000,
		paymentStatus: "pending",
		status: "processing",
		createdAt: "2026-04-28T09:50:00Z",
		updatedAt: "2026-04-28T09:50:00Z",
	},
	{
		_id: "3",
		orderNumber: "ORD-2026003",
		user: { _id: "u3", name: "مریم نادری", email: "maryam@example.com" },
		items: [
			{ _id: "i4", productName: "لپ‌تاپ MSI", quantity: 1, price: 48000000 },
			{ _id: "i5", productName: "کیف لپ‌تاپ", quantity: 1, price: 700000 },
		],
		finalAmount: 48700000,
		paymentStatus: "paid",
		status: "shipped",
		createdAt: "2026-05-02T11:10:00Z",
		updatedAt: "2026-05-03T13:20:00Z",
	},
];
