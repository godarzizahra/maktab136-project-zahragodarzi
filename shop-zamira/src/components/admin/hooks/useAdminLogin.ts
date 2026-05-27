"use client";

import { adminLogin, logout } from "@/components/admin/services/adminService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function useAdminLogin() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function loginFn(payload: { email: string; password: string }) {
		setLoading(true);

		try {
			const user = await adminLogin(payload);

			toast.success("خوش آمدید، ورود با موفقیت انجام شد");

			if (String(user?.role).toLowerCase() === "admin") {
				router.push("/admin");
			} else {
				router.push("/user/dashboard");
			}

			return user;
		} catch (err: any) {
			const errorMsg =
				err.response?.data?.message || "ایمیل یا رمز عبور اشتباه است.";
			toast.error(errorMsg);
			throw err;
		} finally {
			setLoading(false);
		}
	}

	return {
		loginFn,
		logout,
		loading,
	};
}
