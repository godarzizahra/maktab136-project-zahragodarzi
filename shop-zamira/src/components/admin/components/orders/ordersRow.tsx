import { Eye, Pencil } from "lucide-react";
import { Order } from "../../types/dashboardOrdersType";

interface OrderRowProps {
	order: Order;
}

export default function OrderRow({ order }: OrderRowProps) {
	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3 font-bold">{order._id}</td>

			<td className="py-3 px-3">{order.user?.name ?? "—"}</td>

			<td className="py-3 px-3">{order.orderItems?.length ?? 0}</td>

			<td className="py-3 px-3">
				{order.totalPrice.toLocaleString("fa-IR")} تومان
			</td>

			<td className="py-3 px-3">
				{order.paymentStatus === "paid" ? (
					<span className="text-green-600">پرداخت شده</span>
				) : (
					<span className="text-red-600">پرداخت نشده</span>
				)}
			</td>

			<td className="py-3 px-4">
				{new Date(order.createdAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-4">
				{new Date(order.updatedAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-3">
				<span className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm">
					{order.status}
				</span>
			</td>

			<td className="py-3 px-4 text-center">
				<div className="flex items-center justify-center gap-3">
					<button
						onClick={() => console.log(order._id)}
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
