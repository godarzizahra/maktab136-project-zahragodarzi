export type ProfileAddressResponse = {
	success: boolean;
	data: {
		fullName: string;
		city: string;
		province: string;
		addressLine: string;
	} | null;
};
