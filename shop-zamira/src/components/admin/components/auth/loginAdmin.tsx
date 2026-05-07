"use client";
import {
	loginSchema,
	LoginSchemaType,
} from "@/components/main/auth/schemas/login.schema";
import AuthForm from "@/components/shared/authForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAdminLogin } from "../../hooks/useAdminLogin";

export default function LoginAdmin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const { loginFn, loading } = useAdminLogin();
	const router = useRouter();
	async function onSubmit(values: LoginSchemaType) {
		try {
			const user = await loginFn(values);

			if (user.role === "admin") {
				toast.success("ورود موفق");
				router.push("/admin");
			} else {
				router.push("/user/dashboard");
			}
		} catch (err) {
			toast.error("خطا در ورود");
		}
	}
	return (
		<AuthForm
			title="ورود ادمین"
			buttonText={loading ? "در حال ورود..." : "ورود"}
			fields={[
				{ name: "email", type: "email", placeholder: "ایمیل" },
				{ name: "password", placeholder: "رمز عبور" },
			]}
			register={register}
			errors={errors}
			onSubmit={handleSubmit(onSubmit)}
			disabled={loading}
		/>
	);
}
