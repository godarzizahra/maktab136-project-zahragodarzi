"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentResultPage() {
	const searchParams = useSearchParams();

	const status = searchParams.get("status");
	const orderId = searchParams.get("orderId");

	const isSuccess = status === "success";

	return (
		<div className="min-h-screen flex items-center justify-center px-4">
			<div className="w-full max-w-md rounded-2xl border p-6 shadow-sm bg-white text-center">
				<div className="mb-6">
					<div
						className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
							isSuccess
								? "bg-green-100 text-green-600"
								: "bg-red-100 text-red-600"
						}`}
					>
						{isSuccess ? "✓" : "✕"}
					</div>

					<h1 className="text-xl font-bold text-[#1e293b]">
						{isSuccess ? "پرداخت با موفقیت انجام شد" : "پرداخت ناموفق بود"}
					</h1>

					<p className="mt-2 text-sm text-gray-500">شماره سفارش: {orderId}</p>
				</div>

				<div className="flex flex-col gap-3">
					<Link
						href="/"
						className="rounded-lg bg-black text-white py-3 font-medium"
					>
						بازگشت به صفحه اصلی
					</Link>
				</div>
			</div>
		</div>
	);
}
