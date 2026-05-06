"use client";

import { LoginSchemaType } from "@/components/main/auth/schemas/login.schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { adminLogin } from "../services/adminService";

export default function useAdminLogin() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data: LoginSchemaType) => {
		try {
			setIsLoading(true);

			const res = await adminLogin(data);

			const token = res?.data?.token;

			if (!token) {
				throw new Error("توکن دریافت نشد");
			}

			document.cookie = `admin_token=${token}; path=/`;

			toast.success("ورود ادمین با موفقیت انجام شد ✅");

			router.push("/admin");
		} catch (error: any) {
			console.error("LOGIN ERROR:", error);

			const msg =
				error?.response?.data?.message ||
				error?.message ||
				"ایمیل یا رمز عبور اشتباه است";

			toast.error(msg);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		onSubmit,
		isLoading,
	};
}
