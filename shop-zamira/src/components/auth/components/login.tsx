"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schemas/login.schema";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = (data: LoginSchemaType) => {
		console.log("LOGIN DATA:", data);
	};
	return (
		<div className="min-h-screen flex items-center justify-center ">
			<div className="w-full max-w-md shadow-2xl rounded-2xl p-8">
				<Link
					href="/"
					className="absolute top-8 left-8 text-gray-500 hover:text-black transition"
				>
					<ArrowLeft size={22} />
				</Link>

				<h1 className="text-2xl font-bold text-center mb-6 border-b border-gray-300 p-4">
					ورود به حساب کاربری{" "}
				</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className=" w-full space-y-3 px-7"
				>
					<input
						{...register("email")}
						type="email"
						className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-black/20 outline-none"
						placeholder="ایمیل "
					/>
					{errors.email && (
						<p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
					)}
					<div className="relative">
						<input
							{...register("password")}
							type={showPassword ? "text" : "password"}
							className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-black/20 outline-none"
							placeholder="رمز عبور"
						/>

						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
						{errors.password && (
							<p className="text-red-600 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full bg-black text-white py-2 rounded-md"
					>
						ورود
					</button>
				</form>
				<p className="text-center text-sm mt-4">
					حساب کاربری ندارید؟{" "}
					<a href="/register" className="text-blue-600">
						ثبت نام کنید
					</a>
				</p>
			</div>
		</div>
	);
}
