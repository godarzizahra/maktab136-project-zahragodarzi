import { adminLogin, logout } from "@/components/admin/services/adminService";
import { useState } from "react";

export function useAdminLogin() {
	const [loading, setLoading] = useState(false);

	async function loginFn(payload: { email: string; password: string }) {
		setLoading(true);
		try {
			const user = await adminLogin(payload);
			return user;
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
