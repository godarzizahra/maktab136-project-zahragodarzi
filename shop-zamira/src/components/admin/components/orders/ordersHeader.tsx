import { useOrderStore } from "@/store/useOrderStore";

export default function OrdersHeader() {
	const orders = useOrderStore((state) => state.orders);
	const statusFilter = useOrderStore((state) => state.statusFilter);
	const setStatusFilter = useOrderStore((state) => state.setStatusFilter);

	return (
		<div className="flex items-center justify-between mb-2 px-2">
			<h1 className="text-2xl font-bold text-[var(--text-secondary)]">
				سفارش ها{" "}
			</h1>
			<select
				value={statusFilter}
				onChange={(e) => setStatusFilter(e.target.value as any)}
				className="px-5 py-2 border rounded-md"
			>
				<option value="all">نمایش همه </option>
				<option value="pending">در انتظار</option>
				<option value="confirmed">تایید شده</option>
				<option value="shipping">در حال ارسال</option>
				<option value="delivered">تحویل شده</option>
				<option value="cancelled">لغو شده</option>
			</select>
		</div>
	);
}
