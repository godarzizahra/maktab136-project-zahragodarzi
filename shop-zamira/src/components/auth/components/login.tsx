"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="min-h-screen flex items-center justify-center ">
			<div className="w-full max-w-md shadow-2xl rounded-2xl p-8">
				<Link
					href="/"
					className="absolute top-35 left-135 text-gray-500 hover:text-black transition"
				>
					<ArrowLeft size={22} />
				</Link>

				<h1 className="text-2xl font-bold text-center mb-6">
					ایجاد حساب کاربری{" "}
				</h1>

				<form className=" w-full space-y-4 p-7">
					<input
						type="email"
						className=" border rounded-md px-3 py-2 focus:ring-2 focus:ring-black/20 outline-none"
						placeholder="ایمیل "
					/>
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							className=" border rounded-md px-3 py-2 focus:ring-2 focus:ring-black/20 outline-none"
							placeholder="رمز عبور"
						/>

						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>

					<button
						type="submit"
						className="w-full bg-black text-white py-2 rounded-md"
					>
						ثبت نام
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
