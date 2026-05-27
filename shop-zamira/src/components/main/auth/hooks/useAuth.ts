import { useState } from "react";
import { LoginSchemaType } from "../schemas/login.schema";
import { RegisterSchemaType } from "../schemas/register.schema";
import { loginUser, registerUser } from "../services/services";

export function useAuth() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const registerUserHandler = async (data: RegisterSchemaType) => {
		setLoading(true);
		setError("");

		try {
			const res = await registerUser(data);
			const user = res?.data?.user;

			return {
				response: res,
				user,
				isAdmin: String(user?.role).toLowerCase() === "admin",
			};
		} catch (err: any) {
			const message = err.response?.data?.message || "Register failed";
			setError(message);
			throw new Error(message);
		} finally {
			setLoading(false);
		}
	};

	const login = async (data: LoginSchemaType) => {
		setLoading(true);
		setError("");

		try {
			const res = await loginUser(data);
			const user = res?.data?.user;

			return {
				response: res,
				user,
				isAdmin: String(user?.role).toLowerCase() === "admin",
			};
		} catch (err: any) {
			const message = err.response?.data?.message || "Login failed";
			setError(message);
			throw new Error(message);
		} finally {
			setLoading(false);
		}
	};

	return {
		login,
		registerUser: registerUserHandler,
		loading,
		error,
	};
}
