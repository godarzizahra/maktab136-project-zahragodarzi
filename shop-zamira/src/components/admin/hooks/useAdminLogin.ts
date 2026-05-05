import { LoginSchemaType } from "@/components/main/auth/schemas/login.schema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { adminLogin } from "../services/adminService";

export default function useAdminLogin() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const onSubmit = async (data: LoginSchemaType) => {
		try {
			setIsLoading(true);
			setErrorMessage(null);

			const res = await adminLogin(data);

			console.log("Full response:", res);

			const token = res?.data?.token;

			if (token) {
				document.cookie = `admin_token=${token}; path=/`;
			}

			router.push("/admin");
		} catch (error: any) {
			console.error("LOGIN ERROR:", error);
			const msg =
				error?.response?.data?.message || error?.message || "خطای نامشخص";
			setErrorMessage(msg);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		onSubmit,
		isLoading,
		errorMessage,
		setErrorMessage,
	};
}
