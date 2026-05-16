import { z } from "zod";

export const productSchema = z.object({
	name: z.string().min(1, "نام محصول الزامی است"),
	brand: z.string().min(1, "انتخاب برند الزامی است"),
	price: z.number().min(1, "قیمت الزامی است"),
	stock: z.number().min(0, "موجودی نمی‌تواند منفی باشد"),

	category: z.array(z.string()).min(1, "حداقل یک دسته‌بندی انتخاب کنید"),
	description: z.string().min(1, "توضیحات محصول الزامی است"),
	images: z.array(z.string()).min(1, "حداقل یک تصویر الزامی است"),
});

export type ProductFormData = z.infer<typeof productSchema>;

export type Product = ProductFormData & {
	id: string | number;
};
