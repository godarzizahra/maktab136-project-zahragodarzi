"use client";
import {
	loginSchema,
	LoginSchemaType,
} from "@/components/main/auth/schemas/login.schema";
import AuthForm from "@/components/shared/authForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginAdmin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginSchemaType) => {
		console.log("Admin Login:", data);
	};
	return (
		<AuthForm
			title="ورود ادمین"
			buttonText="ورود"
			fields={[
				{ name: "email", type: "email", placeholder: "ایمیل" },
				{ name: "password", placeholder: "رمز عبور" },
			]}
			register={register}
			errors={errors}
			onSubmit={handleSubmit(onSubmit)}
		/>
	);
}
