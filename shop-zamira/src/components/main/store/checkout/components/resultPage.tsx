"use client";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { useEffect } from "react";

type ResultPageProps = {
	searchParams: {
		status?: string;
		type?: string;
		orderId?: string;
	};
};

export default function ResultPage({ searchParams }: ResultPageProps) {
	const status = searchParams?.status;
	const type = searchParams?.type;
	const orderId = searchParams?.orderId;

	const isSuccess = status === "success";
	const isFailed = status === "failed";
	const isOnline = type === "online";
	const isCash = type === "cash";

	const clearCart = useCartStore((state) => state.clearCart);
	const fetchCart = useCartStore((state) => state.fetchCart);
	useEffect(() => {
		const syncCart = async () => {
			if (status === "success" && type === "online") {
				await clearCart();
				await fetchCart();
			}
		};

		syncCart();
	}, [status, type, clearCart, fetchCart]);

	return (
		<div className="mx-auto max-w-2xl px-4 py-10 mt-30 text-center">
			<div
				className={`space-y-3 rounded-2xl p-8 shadow-sm ${
					isSuccess
						? "border border-green-200 bg-green-50"
						: "border border-red-200 bg-red-50"
				}`}
			>
				<h1
					className={`mb-4 text-2xl font-bold ${
						isSuccess ? "text-green-700" : "text-red-700"
					}`}
				>
					{isSuccess ? "سفارش با موفقیت ثبت شد" : "پرداخت ناموفق"}
				</h1>

				{isSuccess && isOnline && (
					<>
						<p className="text-gray-700">
							پرداخت آنلاین شما با موفقیت انجام شد.
						</p>
						<p className="mt-2 text-gray-700">سفارش شما ثبت و پرداخت شد.</p>
					</>
				)}

				{isSuccess && isCash && (
					<>
						<p className="text-gray-700">سفارش شما با موفقیت ثبت شد.</p>
						<p className="mt-2 text-gray-700">روش پرداخت: پرداخت در محل</p>
						<p className="mt-2 text-gray-700">
							لطفاً هنگام تحویل سفارش مبلغ را پرداخت نمایید.
						</p>
					</>
				)}

				{isFailed && isOnline && (
					<>
						<p className="text-gray-700">پرداخت آنلاین ناموفق بود.</p>
						<p className="mt-2 text-gray-700">
							در صورت کسر وجه، مبلغ بازگردانده خواهد شد.
						</p>
					</>
				)}

				{orderId && (
					<p className="mt-4 text-sm text-gray-600">
						کد سفارش: <span className="font-semibold">{orderId}</span>
					</p>
				)}
				<button className="p-3 bg-[var(--accent)] rounded-lg cursor-pointer text-amber-50 hover:bg-[var(--accent-hover)]">
					<Link href={"/"}>بازگشت به صفحه اصلی </Link>
				</button>
			</div>
		</div>
	);
}
