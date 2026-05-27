"use client";

import { useProfileAccount } from "../../hooks/useProfileAccount";
import ChangePasswordForm from "./changePasswordForm";
import ProfileInfoForm from "./profileInfoForm";

export default function ProfileAccountDetails() {
	const {
		profileForm,
		passwordForm,
		loading,
		profileSubmitting,
		passwordSubmitting,
		profileError,
		passwordError,
		profileSuccess,
		passwordSuccess,
		handleProfileChange,
		handlePasswordChange,
		submitProfile,
		submitPassword,
	} = useProfileAccount();

	if (loading) {
		return (
			<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
				<div className="py-10 text-center text-sm text-gray-500">
					در حال دریافت اطلاعات حساب کاربری...
				</div>
			</div>
		);
	}

	return (
		<div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
			<div className="mb-6 text-right">
				<h1 className="text-xl font-bold text-slate-900 md:text-2xl">
					اطلاعات حساب کاربری
				</h1>
				<p className="mt-2 text-sm leading-7 text-slate-600">
					از این بخش می‌توانید اطلاعات حساب کاربری و رمز عبور خود را ویرایش
					کنید.
				</p>
			</div>

			<ProfileInfoForm
				formData={profileForm}
				onChange={handleProfileChange}
				onSubmit={(e) => {
					e.preventDefault();
					submitProfile();
				}}
				loading={profileSubmitting}
				error={profileError}
				success={profileSuccess}
			/>

			<div className="mt-10 border-t border-gray-200 pt-6">
				<h2 className="mb-4 text-right text-lg font-bold text-slate-900">
					تغییر رمز عبور
				</h2>

				<ChangePasswordForm
					formData={passwordForm}
					onChange={handlePasswordChange}
					onSubmit={(e) => {
						e.preventDefault();
						submitPassword();
					}}
					loading={passwordSubmitting}
					error={passwordError}
					success={passwordSuccess}
				/>
			</div>
		</div>
	);
}
