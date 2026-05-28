import { api } from "@/api/interceptor";
import type {
	ChangePasswordPayload,
	ProfileResponse,
	UpdateProfilePayload,
} from "../types/profileType";

type ChangePasswordResponse = {
	success: boolean;
	message?: string;
};

export const getProfile = async (): Promise<ProfileResponse> => {
	try {
		const response = await api.get("/api/profile", {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error("getProfile failed:", error);
		throw error;
	}
};

export const updateProfile = async (
	payload: UpdateProfilePayload,
): Promise<ProfileResponse> => {
	try {
		const response = await api.put("/api/profile", payload, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error("updateProfile failed:", error);
		throw error;
	}
};

export const changePassword = async (
	payload: ChangePasswordPayload,
): Promise<ChangePasswordResponse> => {
	try {
		const response = await api.put("/api/profile/password", payload, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		console.error("changePassword failed:", error);
		throw error;
	}
};
