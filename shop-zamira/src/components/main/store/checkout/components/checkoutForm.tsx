import { useCartStore } from "@/store/useCartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ShippingMethods from "../../cart/components/ShippingMethods";
import {
	CheckoutFormValues,
	checkoutSchema,
} from "../../cart/schema/checkoutSchema";
import PaymentMethod from "./paymentMethod";

export default function CheckoutForm() {
	const shippingMethod = useCartStore((state) => state.shippingMethod);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: {
			fullName: "",
			phone: "",

			province: "",
			city: "",
			address: "",
			postalCode: "",
			plaque: "",
			description: "",
			paymentMethod: "online",
		},
	});

	const paymentMethod = watch("paymentMethod");

	const onSubmit = (data: CheckoutFormValues) => {
		console.log("form data:", data);
		console.log("shipping method:", shippingMethod);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			id="checkout-form"
			className="space-y-6"
		>
			<div className="border rounded-xl p-4 md:p-6">
				<h2 className="text-lg md:text-xl font-bold mb-4">
					جزئیات تکمیل سفارش
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">
								نام و نام خانوادگی
							</label>
							{errors.fullName && (
								<p className="mt-1 text-sm text-red-500">
									{errors.fullName.message}
								</p>
							)}
						</div>
						<input
							{...register("fullName")}
							type="text"
							placeholder="مثلاً علی رضایی"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">
								شماره موبایل
							</label>
							{errors.phone && (
								<p className="mt-1 text-sm text-red-500">
									{errors.phone.message}
								</p>
							)}
						</div>
						<input
							{...register("phone")}
							type="text"
							placeholder="09xxxxxxxxx"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">استان</label>
							{errors.province && (
								<p className="mt-1 text-sm text-red-500">
									{errors.province.message}
								</p>
							)}
						</div>
						<input
							{...register("province")}
							type="text"
							placeholder="استان"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">شهر</label>
							{errors.city && (
								<p className="mt-1 text-sm text-red-500">
									{errors.city.message}
								</p>
							)}
						</div>
						<input
							{...register("city")}
							type="text"
							placeholder="شهر"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">کد پستی</label>
							{errors.postalCode && (
								<p className="mt-1 text-sm text-red-500">
									{errors.postalCode.message}
								</p>
							)}
						</div>
						<input
							{...register("postalCode")}
							type="text"
							placeholder="کد پستی"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div>
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">
								پلاک / واحد
							</label>
							{errors.plaque && (
								<p className="mt-1 text-sm text-red-500">
									{errors.plaque.message}
								</p>
							)}
						</div>
						<input
							{...register("plaque")}
							type="text"
							placeholder="مثلاً 12 / واحد 3"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
						/>
					</div>

					<div className="md:col-span-2">
						<div className="flex gap-5">
							<label className="block mb-2 text-sm font-medium">
								آدرس کامل
							</label>
							{errors.address && (
								<p className="mt-1 text-sm text-red-500">
									{errors.address.message}
								</p>
							)}
						</div>
						<textarea
							{...register("address")}
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
							{...register("description")}
							rows={4}
							placeholder="اگر توضیحی برای سفارش دارید اینجا بنویسید"
							className="w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none"
						/>
					</div>
				</div>
			</div>

			<div className="border rounded-xl p-4 md:p-6">
				<h2 className="text-lg md:text-xl font-bold mb-4">روش ارسال</h2>

				<div className="rounded-lg border p-4">
					<ShippingMethods />
				</div>
			</div>

			<PaymentMethod
				paymentMethod={paymentMethod}
				onChange={(value) => setValue("paymentMethod", value)}
			/>
		</form>
	);
}
