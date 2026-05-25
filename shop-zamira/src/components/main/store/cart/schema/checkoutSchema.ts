import { z } from "zod";

export const checkoutSchema = z.object({
	fullName: z.string().min(3, "نام و نام خانوادگی الزامی است"),
	phone: z
		.string()
		.min(11, "شماره موبایل معتبر نیست")
		.max(11, "شماره موبایل معتبر نیست"),

	province: z.string().min(2, "استان را وارد کنید"),
	city: z.string().min(2, "شهر را وارد کنید"),
	address: z.string().min(10, "آدرس کامل را وارد کنید"),
	postalCode: z
		.string()
		.min(10, "کد پستی باید ۱۰ رقم باشد")
		.max(10, "کد پستی باید ۱۰ رقم باشد"),
	plaque: z.string().min(1, "پلاک / واحد را وارد کنید"),
	description: z.string().optional(),
	paymentMethod: z.enum(["online", "cash"]),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
