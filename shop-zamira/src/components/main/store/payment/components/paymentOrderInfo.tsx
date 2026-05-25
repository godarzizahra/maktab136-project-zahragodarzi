import { formatPrice } from "@/utils/fakePayment";

type PaymentOrderInfoProps = {
	orderId: string;
	payableAmount: number;
};

export default function PaymentOrderInfo({
	orderId,
	payableAmount,
}: PaymentOrderInfoProps) {
	return (
		<div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white p-6 md:p-8">
			<div className="mb-10">
				<p className="text-sm text-gray-300">درگاه پرداخت اینترنتی</p>
				<h1 className="mt-2 text-2xl font-bold">پرداخت امن سفارش</h1>
				<p className="mt-3 text-sm text-gray-300 leading-6">
					لطفاً اطلاعات کارت بانکی خود را جهت تکمیل فرآیند پرداخت وارد نمایید.
				</p>
			</div>

			<div className="rounded-2xl bg-white/10 backdrop-blur-sm p-5 border border-white/10">
				<div className="mb-4 flex items-center justify-between">
					<span className="text-sm text-gray-300">شماره سفارش</span>
					<span className="font-medium text-sm break-all">{orderId}</span>
				</div>

				<div className="mb-4 flex items-center justify-between">
					<span className="text-sm text-gray-300">پذیرنده</span>
					<span className="font-medium text-sm">فروشگاه شما</span>
				</div>

				<div className="mb-1 flex items-center justify-between">
					<span className="text-sm text-gray-300">مبلغ قابل پرداخت</span>
					<span className="text-xl font-extrabold text-green-300">
						{formatPrice(payableAmount)} تومان
					</span>
				</div>
			</div>

			<div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
				<p className="text-sm text-gray-300 leading-6">
					این صفحه یک شبیه‌ساز درگاه پرداخت است و برای تست فرآیند خرید استفاده
					می‌شود.
				</p>
			</div>
		</div>
	);
}
