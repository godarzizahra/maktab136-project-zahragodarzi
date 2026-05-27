import ProfileAccountDetails from "@/components/main/store/profile/components/accountDetails/profileAccountDetails";

export default function AccountDetailsPage() {
	return (
		<ProfileAccountDetails
			defaultValues={{
				Name: "علی رضایی",
				email: "ali@example.com",
				phone: "09123456789",
			}}
		/>
	);
}
