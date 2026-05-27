"use client";

type ChangePasswordFormProps = {
	formData: {
		currentPassword: string;
		newPassword: string;
		confirmPassword: string;
	};
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	loading: boolean;
	error: string;
	success: string;
};

export default function ChangePasswordForm({
	formData,
	onChange,
	onSubmit,
	loading,
	error,
	success,
}: ChangePasswordFormProps) {
	return (
		<form onSubmit={onSubmit} className="space-y-4">
			<div className="text-right">
				<label className="mb-2 block text-sm font-medium text-slate-700">
					رمز عبور فعلی
				</label>
				<input
					type="password"
					name="currentPassword"
					value={formData.currentPassword}
					onChange={onChange}
					className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
					placeholder="رمز عبور فعلی را وارد کنید"
					dir="ltr"
				/>
			</div>

			<div className="text-right">
				<label className="mb-2 block text-sm font-medium text-slate-700">
					رمز عبور جدید
				</label>
				<input
					type="password"
					name="newPassword"
					value={formData.newPassword}
					onChange={onChange}
					className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
					placeholder="رمز عبور جدید را وارد کنید"
					dir="ltr"
				/>
			</div>

			<div className="text-right">
				<label className="mb-2 block text-sm font-medium text-slate-700">
					تکرار رمز عبور جدید
				</label>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={onChange}
					className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
					placeholder="رمز عبور جدید را دوباره وارد کنید"
					dir="ltr"
				/>
			</div>

			{error && (
				<div className="rounded-xl bg-red-50 px-4 py-3 text-right text-sm text-red-600">
					{error}
				</div>
			)}

			{success && (
				<div className="rounded-xl bg-green-50 px-4 py-3 text-right text-sm text-green-600">
					{success}
				</div>
			)}

			<div className="flex justify-start">
				<button
					type="submit"
					disabled={loading}
					className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
				>
					{loading ? "در حال تغییر..." : "تغییر رمز عبور"}
				</button>
			</div>
		</form>
	);
}
