"use client";
import AuthForm from "@/components/shared/authForm";
import { useForm } from "react-hook-form";

type AdminLoginForm = {
	username: string;
	password: string;
};
export default function LoginAdmin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdminLoginForm>();

	const onSubmit = (data: AdminLoginForm) => {
		console.log(data);
	};
	return (
		<AuthForm
			title="ورود ادمین"
			buttonText="ورود"
			fields={[
				{ name: "username", placeholder: "نام کاربری" },
				{ name: "password", placeholder: "رمز عبور" },
			]}
			register={register}
			errors={errors}
			onSubmit={handleSubmit(onSubmit)}
		/>
	);
}
