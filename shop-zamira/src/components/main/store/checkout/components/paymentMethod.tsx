type PaymentMethodProps = {
	paymentMethod: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PaymentMethod({
	paymentMethod,
	onChange,
}: PaymentMethodProps) {
	return (
		<div className="border rounded-xl p-4 md:p-6">
			<h2 className="text-lg md:text-xl font-bold mb-4">روش پرداخت</h2>

			<div className="space-y-3">
				<label
					className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition ${
						paymentMethod === "online"
							? "border-[var(--accent)] "
							: "border-gray-200"
					}`}
				>
					<input
						type="radio"
						name="paymentMethod"
						value="online"
						checked={paymentMethod === "online"}
						onChange={onChange}
						className="mt-1 cursor-pointer"
					/>
					<div>
						<p className="font-medium">پرداخت آنلاین</p>
						<p className="text-sm text-[var(--text-secondary)]">
							پرداخت از طریق درگاه بانکی
						</p>
					</div>
				</label>

				<label
					className={`flex items-start gap-3 rounded-lg border p-4 cursor-pointer transition ${
						paymentMethod === "cod"
							? "border-[var(--accent)] bg-gray-50"
							: "border-gray-200"
					}`}
				>
					<input
						type="radio"
						name="paymentMethod"
						value="cod"
						checked={paymentMethod === "cod"}
						onChange={onChange}
						className="mt-1 cursor-pointer"
					/>
					<div>
						<p className="font-medium">پرداخت در محل</p>
						<p className="text-sm text-[var(--text-secondary)]">
							پرداخت هنگام دریافت سفارش
						</p>
					</div>
				</label>
			</div>
		</div>
	);
}
