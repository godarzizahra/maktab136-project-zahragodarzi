import { z } from "zod";

export const productSchema = z.object({
	name: z.string().min(2, "نام محصول الزامی است"),

	brand: z.string().min(2, "برند الزامی است"),

	price: z.number().min(1, "قیمت باید بیشتر از صفر باشد"),

	stock: z.number().min(0, "موجودی نمی‌تواند منفی باشد"),

	category: z.string().min(2, "دسته بندی الزامی است"),

	description: z.string().min(10, "توضیحات خیلی کوتاه است"),
});

export type ProductFormData = z.infer<typeof productSchema>;
