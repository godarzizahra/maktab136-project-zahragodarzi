"use client";

import { useOrderStore } from "@/store/useOrderStore";

export default function OrderDetailsModal() {
	const { selectedOrder, detailsOpen, closeDetails } = useOrderStore();

	if (!detailsOpen || !selectedOrder) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg">
			<div className="bg-white dark:bg-gray-900 text-white w-[700px] max-h-[90vh] overflow-y-auto rounded-xl shadow-lg p-6 relative">
				<button
					onClick={closeDetails}
					className="absolute top-3 left-3 text-gray-500 hover:text-red-500"
				>
					✕
				</button>

				<h2 className="text-xl font-bold mb-6">جزئیات سفارش</h2>

				<div className="mb-6">
					<h3 className="font-semibold mb-2">اطلاعات کاربر</h3>
					<p>نام: {selectedOrder.user?.name ?? "—"}</p>
					<p>ایمیل: {selectedOrder.user?.email ?? "—"}</p>
				</div>

				<div className="mb-6">
					<h3 className="font-semibold mb-3">محصولات سفارش</h3>

					<table className="w-full text-sm text-white">
						<thead>
							<tr className="border-b">
								<th className="py-2 text-right">نام محصول </th>
								<th className="py-2 text-center">تعداد</th>
								<th className="py-2 text-left">قیمت</th>
							</tr>
						</thead>
						<tbody>
							{selectedOrder.orderItems?.map((item, index) => (
								<tr key={index} className="border-b">
									<td className="py-2">{item.name}</td>
									<td className="py-2 text-center">{item.quantity}</td>
									<td className="py-2 text-left">
										{item.price.toLocaleString("fa-IR")} تومان
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="mb-4">
					<p className="font-bold">
						مبلغ کل: {selectedOrder.totalPrice.toLocaleString("fa-IR")} تومان
					</p>
				</div>

				<div className="text-sm text-gray-500">
					<p>
						تاریخ ثبت:{" "}
						{new Date(selectedOrder.createdAt).toLocaleDateString("fa-IR")}
					</p>
				</div>
			</div>
		</div>
	);
}
