export type ProfileResponse = {
	success: boolean;
	data: UserProfile;
};

export type UserProfile = {
	_id: string;
	name: string;
	email: string;
	phone: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type UpdateProfilePayload = {
	name: string;
	email: string;
	phone: string;
};

export type ChangePasswordPayload = {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
};
