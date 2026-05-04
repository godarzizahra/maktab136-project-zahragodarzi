import { Order } from "../../types/dashboardOrdersType";
import OrderRow from "./ordersRow";

export interface OrdersTableProps {
	orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
			<div className="max-h-[400px] overflow-y-auto custom-scroll">
				<table className="w-full text-sm">
					<thead className="bg-[var(--muted)] text-[var(--accent)] sticky top-0">
						<tr>
							<th className="text-right p-3">شماره سفارش</th>
							<th className="text-right p-3">نام کاربر</th>
							<th className="text-right p-3">تعداد آیتم‌ها</th>
							<th className="text-right p-3">مبلغ کل</th>
							<th className="text-right p-3">وضعیت پرداخت</th>
							<th className="text-right p-3">تاریخ سفارش</th>
							<th className="text-right p-3">تاریخ بروزرسانی</th>
							<th className="text-right p-3">وضعیت سفارش</th>
							<th className="text-center p-3"></th>
						</tr>
					</thead>

					<tbody>
						{orders?.length > 0 ? (
							orders.map((order) => <OrderRow key={order._id} order={order} />)
						) : (
							<tr>
								<td colSpan={9} className="text-center py-4 text-gray-500">
									سفارشی یافت نشد
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
