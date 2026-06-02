import { OrderStatusUI } from "../types/getOrdersType";

export function getStatusLabel(status: OrderStatusUI) {
	switch (status) {
		case "processing":
			return "در حال پردازش";
		case "completed":
			return "تکمیل شده";
		case "cancelled":
			return "لغو شده";
		case "pending":
			return "در انتظار ";
	}
}

export function getStatusClass(status: OrderStatusUI) {
	switch (status) {
		case "processing":
			return "bg-blue-50 text-blue-600";
		case "completed":
			return "bg-green-50 text-green-600";
		case "cancelled":
			return "bg-red-50 text-red-600";
		case "pending":
			return "bg-amber-50 text-amber-600";
	}
}
