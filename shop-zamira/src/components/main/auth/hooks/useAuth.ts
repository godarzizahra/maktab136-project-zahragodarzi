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
			return res;
		} catch (err: any) {
			setError(err.response?.data?.message || "Register failed");
			throw err;
		} finally {
			setLoading(false);
		}
	};

	const login = async (data: LoginSchemaType) => {
		setLoading(true);
		setError("");
		try {
			const res = await loginUser(data);
			return res;
		} catch (err: any) {
			setError(err.response?.data?.message || "Login failed");
			throw err;
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
