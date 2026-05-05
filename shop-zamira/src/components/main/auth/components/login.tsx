"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { loginSchema, LoginSchemaType } from "../schemas/login.schema";
import AuthForm from "./authForm";

export default function Login() {
	const { login, loading, error } = useAuth();
	const form = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Link href="/" className="absolute top-8 left-8 text-gray-500">
				<ArrowLeft size={22} />
			</Link>

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
				onSubmit={form.handleSubmit((data) => console.log("LOGIN:", data))}
				footerText="حساب کاربری ندارید؟"
				footerLinkText="ثبت نام کنید"
				footerHref="/register"
				errorMessage={error}
			/>
		</div>
	);
}
