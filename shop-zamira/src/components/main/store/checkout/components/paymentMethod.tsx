type PaymentMethodProps = {
	paymentMethod: "online" | "cash";
	onChange: (value: "online" | "cash") => void;
};

export default function PaymentMethod({
	paymentMethod,
	onChange,
}: PaymentMethodProps) {
	return (
		<div className="border rounded-xl p-4 md:p-6">
			<h2 className="text-lg md:text-xl font-bold mb-4">روش پرداخت</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<label
					className={`cursor-pointer rounded-lg border p-4 transition ${
						paymentMethod === "online"
							? "border-[var(--accent)] "
							: "border-gray-200"
					}`}
				>
					<input
						type="radio"
						name="paymentMethod"
						checked={paymentMethod === "online"}
						onChange={() => onChange("online")}
						className="hidden"
					/>
					<div className="font-medium text-[var(--text-primary)]">
						پرداخت آنلاین
					</div>
					<p className="text-sm text-[var(--text-primary)] mt-1">
						پرداخت از طریق درگاه بانکی
					</p>
				</label>

				<label
					className={`cursor-pointer rounded-lg border p-4 transition ${
						paymentMethod === "cash"
							? "border-[var(--accent)] "
							: "border-gray-200"
					}`}
				>
					<input
						type="radio"
						name="paymentMethod"
						checked={paymentMethod === "cash"}
						onChange={() => onChange("cash")}
						className="hidden"
					/>
					<div className="font-medium text-[var(--text-primary)]">
						پرداخت در محل
					</div>
					<p className="text-sm text-[var(--text-primary)] mt-1">
						پرداخت هنگام دریافت سفارش
					</p>
				</label>
			</div>
		</div>
	);
}
