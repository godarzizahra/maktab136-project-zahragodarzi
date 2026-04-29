import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
		message: "ایمیل معتبر نیست",
	}),

	password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد "),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
