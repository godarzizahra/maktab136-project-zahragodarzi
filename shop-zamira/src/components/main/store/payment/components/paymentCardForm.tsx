import { PaymentCardFormProps } from "../types/paymentType";
import InputField from "./inputField";

export default function PaymentCardForm({
	cardNumber,
	cvv2,
	expMonth,
	expYear,
	password,
	errors,
	submitLoading,
	onCardNumberChange,
	onCvv2Change,
	onExpMonthChange,
	onExpYearChange,
	onPasswordChange,
	onBlurField,
	onCancel,
	onSubmit,
}: PaymentCardFormProps) {
	return (
		<div className="p-6 md:p-8">
			<div className="mb-6">
				<h2 className="text-xl font-bold text-gray-900">اطلاعات کارت بانکی</h2>
				<p className="mt-2 text-sm text-gray-500">
					اطلاعات زیر را برای شبیه‌سازی پرداخت وارد کنید
				</p>
			</div>

			<div className="space-y-5">
				<InputField
					label="شماره کارت"
					value={cardNumber}
					onChange={onCardNumberChange}
					onBlur={() => onBlurField("cardNumber")}
					placeholder="1234 5678 9012 3456"
					error={errors.cardNumber}
					inputMode="numeric"
				/>

				<div className="grid grid-cols-2 gap-4">
					<InputField
						label="CVV2"
						value={cvv2}
						onChange={onCvv2Change}
						onBlur={() => onBlurField("cvv2")}
						placeholder="123"
						error={errors.cvv2}
						inputMode="numeric"
					/>

					<InputField
						label="رمز پویا"
						type="password"
						value={password}
						onChange={onPasswordChange}
						onBlur={() => onBlurField("password")}
						placeholder="••••••"
						error={errors.password}
						inputMode="numeric"
					/>
				</div>

				<div>
					<label className="mb-2 block text-sm font-medium text-gray-700">
						تاریخ انقضا
					</label>

					<div className="grid grid-cols-2 gap-4">
						<InputField
							value={expMonth}
							onChange={onExpMonthChange}
							onBlur={() => onBlurField("expMonth")}
							placeholder="ماه"
							error={errors.expMonth}
							inputMode="numeric"
						/>

						<InputField
							value={expYear}
							onChange={onExpYearChange}
							onBlur={() => onBlurField("expYear")}
							placeholder="سال"
							error={errors.expYear}
							inputMode="numeric"
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3 pt-2">
					<button
						type="button"
						onClick={onCancel}
						disabled={submitLoading}
						className="rounded-xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
					>
						انصراف
					</button>

					<button
						type="button"
						onClick={onSubmit}
						disabled={submitLoading}
						className="rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700 disabled:opacity-60"
					>
						{submitLoading ? "در حال پردازش..." : "پرداخت"}
					</button>
				</div>
			</div>
		</div>
	);
}
