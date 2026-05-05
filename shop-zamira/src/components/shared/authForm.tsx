"use client";

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Field = {
	name: string;
	type?: string;
	placeholder: string;
};

type Props = {
	title: string;
	buttonText: string;
	disabled?: boolean;
	fields: Field[];
	register: UseFormRegister<any>;
	errors: FieldErrors<any>;
	onSubmit: () => void;
	errorMessage?: string;

	footerText?: string;
	footerLinkText?: string;
	footerHref?: string;
};

export default function AuthForm({
	title,
	buttonText,
	disabled,
	fields,
	register,
	errors,
	onSubmit,
	footerText,
	footerLinkText,
	footerHref,
	errorMessage,
}: Props) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="w-full max-w-md shadow-2xl rounded-2xl p-8">
			<h1 className="text-2xl font-bold text-center mb-6 border-b p-4">
				{title}
			</h1>

			<form onSubmit={onSubmit} className="space-y-3 px-7">
				{fields.map((field) => (
					<div key={field.name} className="relative">
						<input
							{...register(field.name)}
							type={
								field.name === "password"
									? showPassword
										? "text"
										: "password"
									: (field.type ?? "text")
							}
							placeholder={field.placeholder}
							disabled={disabled}
							className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
						/>

						{field.name === "password" && (
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
							>
								{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
							</button>
						)}

						{errors[field.name] && (
							<p className="text-red-600 text-sm mt-1">
								{String(errors[field.name]?.message)}
							</p>
						)}
					</div>
				))}

				<button
					type="submit"
					disabled={disabled}
					className="w-full bg-black text-white py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{buttonText}
				</button>

				{errorMessage && (
					<p className="text-red-600 text-center text-sm mt-2">
						{errorMessage}
					</p>
				)}
			</form>

			{footerText && footerLinkText && footerHref && (
				<p className="text-center text-sm mt-4">
					{footerText}{" "}
					<Link href={footerHref} className="text-blue-600">
						{footerLinkText}
					</Link>
				</p>
			)}
		</div>
	);
}
