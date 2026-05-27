import { OrderViewModel } from "../../types/getOrdersType";
import { StatusBadge } from "./statusBadge";

type OrdersMobileListProps = {
	orders: OrderViewModel[];
	onOpenDetails: (orderId: string) => void;
};

export default function OrdersMobileList({
	orders,
	onOpenDetails,
}: OrdersMobileListProps) {
	return (
		<div className="space-y-4 p-4 lg:hidden sm:p-6">
			{orders.map((order) => (
				<div
					key={order.rawId}
					className="rounded-2xl border border-gray-200 p-4 shadow-sm"
				>
					<div className="mb-4 flex items-center justify-between gap-3">
						<span className="text-sm font-bold text-slate-800">{order.id}</span>
						<StatusBadge status={order.status} />
					</div>

					<div className="space-y-3 text-sm text-slate-600">
						<div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2">
							<span className="text-gray-500">تاریخ</span>
							<span className="font-medium text-slate-700">{order.date}</span>
						</div>

						<div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-2">
							<span className="text-gray-500">مجموع</span>
							<div className="text-left">
								<span className="font-bold text-[#c8a44d]">{order.total}</span>
							</div>
						</div>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						<button
							onClick={() => onOpenDetails(order.rawId)}
							className="inline-flex min-w-[100px] items-center justify-center rounded-md bg-[#d4b055] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#c6a146]"
						>
							نمایش
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
