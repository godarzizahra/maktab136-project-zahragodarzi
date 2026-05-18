import { useOrderStore } from "@/store/useOrderStore";
import { Eye, Pencil } from "lucide-react";
import { Order } from "../../types/dashboardOrdersType";

interface OrderRowProps {
	order: Order;
}

function getStatusClass(status: string) {
	switch (status) {
		case "pending":
			return "bg-yellow-100 text-yellow-700";
		case "processing":
			return "bg-blue-100 text-blue-700";
		case "shipped":
			return "bg-purple-100 text-purple-700";
		case "delivered":
			return "bg-green-100 text-green-700";
		case "cancelled":
			return "bg-red-100 text-red-700";
		default:
			return "bg-gray-100 text-gray-700";
	}
}

function getStatusLabel(status: string) {
	switch (status) {
		case "pending":
			return "در انتظار";
		case "processing":
			return "در حال پردازش";
		case "shipped":
			return "ارسال شده";
		case "delivered":
			return "تحویل شده";
		case "cancelled":
			return "لغو شده";
		default:
			return status;
	}
}

export default function OrderRow({ order }: OrderRowProps) {
	const openDetails = useOrderStore((state) => state.openDetails);
	const updateOrderStatus = useOrderStore((state) => state.updateOrderStatus);

	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3 font-bold">{order._id}</td>

			<td className="py-3 px-3">{order.user?.name ?? "—"}</td>

			<td className="py-3 px-3">{order.orderItems?.length ?? 0}</td>

			<td className="py-3 px-3">
				{order.totalPrice.toLocaleString("fa-IR")} تومان
			</td>

			<td className="py-3 px-3">
				<select
					value={order.status}
					onChange={(e) => updateOrderStatus(order._id, e.target.value)}
					className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 
	bg-white dark:bg-gray-800 text-sm focus:outline-none"
				>
					<option value="pending">در انتظار</option>
					<option value="processing">در حال پردازش</option>
					<option value="shipped">ارسال شده</option>
					<option value="delivered">تحویل شده</option>
					<option value="cancelled">لغو شده</option>
				</select>
			</td>

			<td className="py-3 px-4">
				{new Date(order.createdAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-4">
				{new Date(order.updatedAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-4 text-center">
				<div className="flex items-center justify-center gap-3">
					<button
						onClick={() => openDetails(order)}
						className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
						title="مشاهده جزئیات"
					>
						<Eye size={16} className="text-blue-600 dark:text-blue-400" />
					</button>

					<button
						onClick={() => console.log("Edit Order", order._id)}
						className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
						title="ویرایش"
					>
						<Pencil size={16} className="text-blue-600 dark:text-blue-400" />
					</button>
				</div>
			</td>
		</tr>
	);
}
