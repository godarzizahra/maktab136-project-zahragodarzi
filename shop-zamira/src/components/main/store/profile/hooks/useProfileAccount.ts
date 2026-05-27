"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
	changePassword,
	getProfile,
	updateProfile,
} from "../services/profileService";

export function useProfileAccount() {
	const [profileForm, setProfileForm] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const [passwordForm, setPasswordForm] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	const [loading, setLoading] = useState(true);
	const [profileSubmitting, setProfileSubmitting] = useState(false);
	const [passwordSubmitting, setPasswordSubmitting] = useState(false);

	const [profileError, setProfileError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const [profileSuccess, setProfileSuccess] = useState("");
	const [passwordSuccess, setPasswordSuccess] = useState("");

	useEffect(() => {
		let isMounted = true;

		async function fetchProfile() {
			try {
				setLoading(true);
				setProfileError("");

				const response = await getProfile();

				if (!isMounted) return;

				setProfileForm({
					name: response.data.name || "",
					email: response.data.email || "",
					phone: response.data.phone || "",
				});
			} catch (error) {
				if (!isMounted) return;

				setProfileError(
					error instanceof Error
						? error.message
						: "خطا در دریافت اطلاعات حساب کاربری",
				);
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		}

		fetchProfile();

		return () => {
			isMounted = false;
		};
	}, []);

	const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setProfileForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setPasswordForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitProfile = async () => {
		try {
			setProfileSubmitting(true);
			setProfileError("");
			setProfileSuccess("");

			const response = await updateProfile(profileForm);

			setProfileForm({
				name: response.data.name || "",
				email: response.data.email || "",
				phone: response.data.phone || "",
			});

			toast.success("اطلاعات حساب کاربری با موفقیت ذخیره شد.");
		} catch (error) {
			setProfileError(
				error instanceof Error
					? error.message
					: "خطا در بروزرسانی اطلاعات حساب کاربری",
			);
		} finally {
			setProfileSubmitting(false);
		}
	};

	const submitPassword = async () => {
		if (
			!passwordForm.currentPassword ||
			!passwordForm.newPassword ||
			!passwordForm.confirmPassword
		) {
			setPasswordError("لطفاً همه فیلدهای رمز عبور را تکمیل کنید.");
			return;
		}

		if (passwordForm.newPassword !== passwordForm.confirmPassword) {
			setPasswordError("رمز عبور جدید و تکرار آن یکسان نیستند.");
			return;
		}

		try {
			setPasswordSubmitting(true);
			setPasswordError("");
			setPasswordSuccess("");

			await changePassword(passwordForm);

			toast.success("رمز عبور با موفقیت تغییر کرد.");
			setPasswordForm({
				currentPassword: "",
				newPassword: "",
				confirmPassword: "",
			});
		} catch (error) {
			setPasswordError(
				error instanceof Error ? error.message : "خطا در تغییر رمز عبور",
			);
		} finally {
			setPasswordSubmitting(false);
		}
	};

	return {
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
	};
}
