import { z } from "zod";

export const registerSchema = z.object({
	name: z.string().min(3, { message: "نام باید حداقل ۳ کاراکتر باشد" }),

	phone: z.string().regex(/^09\d{9}$/, { message: "شماره تلفن معتبر نیست" }),

	email: z.string().refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
		message: "ایمیل معتبر نیست",
	}),

	password: z
		.string()
		.min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
