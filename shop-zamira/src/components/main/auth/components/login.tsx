"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import AuthForm from "../../../shared/authForm";
import { useAuth } from "../hooks/useAuth";
import { loginSchema, LoginSchemaType } from "../schemas/login.schema";

export default function Login() {
	const { login, loading, error } = useAuth();
	const router = useRouter();

	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginSchemaType) => {
		try {
			const res = await login(data);

			if (res?.status === 200 || res?.data) {
				router.push("/main");
				form.reset();
			}
		} catch (err) {}
	};

	return (
		<div className="min-h-screen flex items-center justify-center">
			<AuthForm
				title="ورود به حساب کاربری"
				buttonText={loading ? "در حال ورود..." : "ورود"}
				disabled={loading}
				fields={[
					{ name: "email", type: "email", placeholder: "ایمیل" },
					{ name: "password", placeholder: "رمز عبور" },
				]}
				register={form.register}
				errors={form.formState.errors}
				onSubmit={form.handleSubmit(onSubmit)}
				footerText="حساب کاربری ندارید؟"
				footerLinkText="ثبت نام کنید"
				footerHref="/main/register"
				errorMessage={error}
			/>
		</div>
	);
}
