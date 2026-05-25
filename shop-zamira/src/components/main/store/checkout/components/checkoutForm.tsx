"use client";

import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import ShippingMethods from "../../cart/components/ShippingMethods";
import PaymentMethod from "./paymentMethod";

export default function CheckoutForm() {
	const shippingMethod = useCartStore((state) => state.shippingMethod);

	const [form, setForm] = useState({
		fullName: "",
		phone: "",
		email: "",
		province: "",
		city: "",
		address: "",
		postalCode: "",
		plaque: "",
		description: "",
		paymentMethod: "online",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = () => {};

	return (
		<form onSubmit={handleSubmit} id="checkout-form" className="space-y-6">
			<div className="border rounded-xl p-4 md:p-6">
				<h2 className="text-lg md:text-xl font-bold mb-4">
					جزئیات تکمیل سفارش
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block mb-2 text-sm font-medium">
							نام و نام خانوادگی
						</label>
						<input
							name="fullName"
							value={form.fullName}
							onChange={handleChange}
							type="text"
							placeholder="مثلاً علی رضایی"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							شماره موبایل
						</label>
						<input
							name="phone"
							value={form.phone}
							onChange={handleChange}
							type="text"
							placeholder="09xxxxxxxxx"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">ایمیل</label>
						<input
							name="email"
							value={form.email}
							onChange={handleChange}
							type="email"
							placeholder="example@mail.com"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">استان</label>
						<input
							name="province"
							value={form.province}
							onChange={handleChange}
							type="text"
							placeholder="استان"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">شهر</label>
						<input
							name="city"
							value={form.city}
							onChange={handleChange}
							type="text"
							placeholder="شهر"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">کد پستی</label>
						<input
							name="postalCode"
							value={form.postalCode}
							onChange={handleChange}
							type="text"
							placeholder="کد پستی"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<label className="block mb-2 text-sm font-medium">
							پلاک / واحد
						</label>
						<input
							name="plaque"
							value={form.plaque}
							onChange={handleChange}
							type="text"
							placeholder="مثلاً 12 / واحد 3"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div className="md:col-span-2">
						<label className="block mb-2 text-sm font-medium">آدرس کامل</label>
						<textarea
							name="address"
							value={form.address}
							onChange={handleChange}
							rows={4}
							placeholder="آدرس دقیق خود را وارد کنید"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
						/>
					</div>

					<div className="md:col-span-2">
						<label className="block mb-2 text-sm font-medium">
							توضیحات سفارش
						</label>
						<textarea
							name="description"
							value={form.description}
							onChange={handleChange}
							rows={4}
							placeholder="اگر توضیحی برای سفارش دارید اینجا بنویسید"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
						/>
					</div>
				</div>
			</div>

			<div className="border rounded-xl p-4 md:p-6">
				<h2 className="text-lg md:text-xl font-bold mb-4">روش ارسال</h2>

				<div className="rounded-lg border p-4 ">
					<ShippingMethods />
				</div>
			</div>

			<PaymentMethod
				paymentMethod={form.paymentMethod}
				onChange={handleChange}
			/>
		</form>
	);
}
