import { Order } from "../types/dashboardOrdersType";

export async function getAllOrders(): Promise<Order[]> {
	const token = document.cookie
		.split("; ")
		.find((row) => row.startsWith("admin_token="))
		?.split("=")[1];

	if (!token) {
		throw new Error("توکن یافت نشد");
	}

	const res = await fetch("http://localhost:5000/api/orders/admin/all", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!res.ok) {
		throw new Error("خطا در دریافت سفارش‌ها");
	}

	const data = await res.json();
	console.log("ORDERS API:", data);

	return data.data || [];
}
