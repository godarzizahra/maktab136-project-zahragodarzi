"use client";

import { Order } from "../../types/getOrdersType";

type Props = {
	order: Order | null;
	open: boolean;
	onClose: () => void;
};

function formatPrice(amount: number) {
	return `${amount.toLocaleString("fa-IR")} تومان`;
}

export default function OrderDetailsModal({ order, open, onClose }: Props) {
	if (!open || !order) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-lg">
			<div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">
				<div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
					<h2 className="text-lg font-bold text-slate-800">جزییات سفارش</h2>
					<button
						onClick={onClose}
						className="rounded-md px-3 py-1 text-xl text-gray-500 hover:bg-gray-100"
					>
						×
					</button>
				</div>

				<div className="space-y-6 p-5 text-sm text-slate-700">
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="rounded-xl border border-gray-200 p-4">
							<p className="mb-2 text-gray-500">شماره سفارش</p>
							<p className="font-bold">{order._id}</p>
						</div>

						<div className="rounded-xl border border-gray-200 p-4">
							<p className="mb-2 text-gray-500">وضعیت</p>
							<p className="font-bold">{order.status}</p>
						</div>

						<div className="rounded-xl border border-gray-200 p-4">
							<p className="mb-2 text-gray-500">روش پرداخت</p>
							<p className="font-bold">{order.paymentMethod}</p>
						</div>

						<div className="rounded-xl border border-gray-200 p-4">
							<p className="mb-2 text-gray-500">وضعیت پرداخت</p>
							<p className="font-bold">
								{order.isPaid ? "پرداخت شده" : "پرداخت نشده"}
							</p>
						</div>
					</div>

					<div className="rounded-xl border border-gray-200 p-4">
						<h3 className="mb-3 font-bold text-slate-800">آدرس ارسال</h3>
						<div className="space-y-2">
							<p>نام: {order.shippingAddress.name}</p>
							<p>تلفن: {order.shippingAddress.phone}</p>
							<p>آدرس: {order.shippingAddress.address}</p>
						</div>
					</div>

					<div className="rounded-xl border border-gray-200 p-4">
						<h3 className="mb-3 font-bold text-slate-800">اقلام سفارش</h3>

						<div className="space-y-3">
							{order.orderItems.map((item) => (
								<div
									key={item._id}
									className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 p-3"
								>
									<div>
										<p className="font-medium">{item.name}</p>
										<p className="text-xs text-gray-500">
											تعداد: {item.quantity}
										</p>
									</div>

									<div className="font-bold text-[#c8a44d]">
										{formatPrice(item.price)}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-xl border border-gray-200 p-4">
						<div className="flex items-center justify-between">
							<span className="text-gray-500">مبلغ کل</span>
							<span className="text-lg font-bold text-[#c8a44d]">
								{formatPrice(order.totalPrice)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
