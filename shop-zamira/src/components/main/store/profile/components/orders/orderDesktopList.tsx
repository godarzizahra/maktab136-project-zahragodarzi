import { OrderViewModel } from "../../types/getOrdersType";
import { StatusBadge } from "./statusBadge";
type OrdersDesktopListProps = {
	orders: OrderViewModel[];
	onOpenDetails: (orderId: string) => void;
};
export default function OrderDesktopList({
	orders,
	onOpenDetails,
}: OrdersDesktopListProps) {
	return (
		<>
			<div className="hidden w-full lg:block">
				<div className="grid grid-cols-[140px_180px_160px_220px_1fr] items-center gap-4 border-b border-gray-100 px-6 py-4 text-sm font-semibold text-slate-700">
					<div className="text-right">سفارش</div>
					<div className="text-right">تاریخ</div>
					<div className="text-right">وضعیت</div>
					<div className="text-right">مجموع</div>
					<div className="text-right">عملیات ها</div>
				</div>

				{orders.map((order) => (
					<div
						key={order.rawId}
						className="grid grid-cols-[140px_180px_160px_220px_1fr] items-center gap-4 px-6 py-4 text-sm text-slate-700"
					>
						<div className="text-right font-medium text-slate-800">
							{order.id}
						</div>
						<div className="text-right">{order.date}</div>
						<div className="text-right">
							<StatusBadge status={order.status} />
						</div>
						<div className="text-right">
							<span className="font-bold text-[#c8a44d]">{order.total}</span>
						</div>

						<div className="flex justify-start gap-2">
							<button
								onClick={() => onOpenDetails(order.rawId)}
								className="inline-flex items-center justify-center rounded-md bg-[#d4b055] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#c6a146]"
							>
								نمایش
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
