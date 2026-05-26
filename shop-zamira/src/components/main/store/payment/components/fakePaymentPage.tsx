"use client";

import {
	formatCardNumber,
	toEnglishDigits,
	validateCard,
	validateCVV2,
	validateMonth,
	validatePassword,
	validateYear,
} from "@/utils/fakePayment";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getOrderById, OrderData } from "../../checkout/services/orderService";
import PaymentCardForm from "./paymentCardForm";
import PaymentNotice from "./paymentNotice";
import PaymentOrderInfo from "./paymentOrderInfo";

type TouchedFields = {
	cardNumber: boolean;
	cvv2: boolean;
	expMonth: boolean;
	expYear: boolean;
	password: boolean;
};

const initialTouched: TouchedFields = {
	cardNumber: false,
	cvv2: false,
	expMonth: false,
	expYear: false,
	password: false,
};

export default function FakePaymentPage() {
	const router = useRouter();
	const params = useParams<{ orderId: string }>();
	const searchParams = useSearchParams();
	const orderId = params.orderId;

	const [pageLoading, setPageLoading] = useState(true);
	const [submitLoading, setSubmitLoading] = useState(false);
	const [order, setOrder] = useState<OrderData | null>(null);

	const [cardNumber, setCardNumber] = useState("");
	const [cvv2, setCvv2] = useState("");
	const [expMonth, setExpMonth] = useState("");
	const [expYear, setExpYear] = useState("");
	const [password, setPassword] = useState("");
	const [touched, setTouched] = useState<TouchedFields>(initialTouched);

	useEffect(() => {
		async function loadOrder() {
			try {
				const response = await getOrderById(orderId);
				setOrder(response.data);
			} catch (error) {
				console.error("خطا در دریافت سفارش", error);
			} finally {
				setPageLoading(false);
			}
		}

		if (orderId) {
			loadOrder();
		}
	}, [orderId]);

	const payableAmount = useMemo(() => {
		const amountFromQuery = Number(searchParams.get("amount") || 0);

		return (
			amountFromQuery ||
			order?.payablePrice ||
			order?.finalPrice ||
			order?.totalPrice ||
			0
		);
	}, [order, searchParams]);

	const errors = {
		cardNumber:
			touched.cardNumber && !validateCard(cardNumber)
				? "شماره کارت باید 16 رقم باشد"
				: "",
		cvv2:
			touched.cvv2 && !validateCVV2(cvv2) ? "CVV2 باید 3 یا 4 رقم باشد" : "",
		expMonth:
			touched.expMonth && !validateMonth(expMonth) ? "ماه نامعتبر است" : "",
		expYear: touched.expYear && !validateYear(expYear) ? "سال نامعتبر است" : "",
		password:
			touched.password && !validatePassword(password)
				? "رمز پویا نامعتبر است"
				: "",
	};

	const isFormValid =
		validateCard(cardNumber) &&
		validateCVV2(cvv2) &&
		validateMonth(expMonth) &&
		validateYear(expYear) &&
		validatePassword(password);

	const handleBlurField = (field: keyof TouchedFields) => {
		setTouched((prev) => ({ ...prev, [field]: true }));
	};

	const markAllTouched = () => {
		setTouched({
			cardNumber: true,
			cvv2: true,
			expMonth: true,
			expYear: true,
			password: true,
		});
	};

	const handleSuccess = () => {
		markAllTouched();

		if (!isFormValid) return;

		setSubmitLoading(true);

		setTimeout(() => {
			router.replace(
				`/checkout/result?status=success&type=online&orderId=${orderId}`,
			);
		}, 1200);
	};

	const handleFailed = () => {
		setSubmitLoading(true);

		setTimeout(() => {
			router.replace(
				`/checkout/result?status=failed&type=online&orderId=${orderId}`,
			);
		}, 1000);
	};

	if (pageLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center px-4">
				<div className="rounded-2xl border bg-white px-6 py-8 shadow-sm">
					در حال دریافت اطلاعات سفارش...
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4 py-10 mt-15">
			<div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
				<div className="grid md:grid-cols-2">
					<PaymentOrderInfo orderId={orderId} payableAmount={payableAmount} />

					<div className="p-6 md:p-8">
						<PaymentCardForm
							cardNumber={cardNumber}
							cvv2={cvv2}
							expMonth={expMonth}
							expYear={expYear}
							password={password}
							errors={errors}
							submitLoading={submitLoading}
							onCardNumberChange={(value) =>
								setCardNumber(formatCardNumber(value))
							}
							onCvv2Change={(value) =>
								setCvv2(toEnglishDigits(value).slice(0, 4))
							}
							onExpMonthChange={(value) =>
								setExpMonth(toEnglishDigits(value).slice(0, 2))
							}
							onExpYearChange={(value) =>
								setExpYear(toEnglishDigits(value).slice(0, 2))
							}
							onPasswordChange={(value) =>
								setPassword(toEnglishDigits(value).slice(0, 8))
							}
							onBlurField={handleBlurField}
							onCancel={handleFailed}
							onSubmit={handleSuccess}
						/>

						<div className="mt-5">
							<PaymentNotice />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
