"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthForm from "../../../shared/authForm";
import { useAuth } from "../hooks/useAuth";
import { registerSchema, RegisterSchemaType } from "../schemas/register.schema";

export default function Register() {
	const { register, loading, error } = useAuth();
	const form = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
	});

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Link href="/" className="absolute top-8 left-8 text-gray-500">
				<ArrowLeft size={22} />
			</Link>

			<AuthForm
				title="ایجاد حساب کاربری"
				buttonText={loading ? "..." : "ثبت نام"}
				disabled={loading}
				fields={[
					{ name: "name", placeholder: "نام" },
					{ name: "phone", placeholder: "شماره تلفن" },
					{ name: "email", type: "email", placeholder: "ایمیل" },
					{ name: "password", placeholder: "رمز عبور" },
				]}
				register={form.register}
				errors={form.formState.errors}
				onSubmit={form.handleSubmit((data) => console.log("REGISTER:", data))}
				footerText="قبلاً ثبت‌نام کرده‌اید؟"
				footerLinkText="وارد شوید"
				footerHref="/main/login"
				errorMessage={error}
			/>
		</div>
	);
}
