"use client";

type ProfileInfoFormProps = {
	formData: {
		name: string;
		email: string;
		phone: string;
	};
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	loading: boolean;
	error: string;
	success: string;
};

export default function ProfileInfoForm({
	formData,
	onChange,
	onSubmit,
	loading,
	error,
	success,
}: ProfileInfoFormProps) {
	return (
		<form onSubmit={onSubmit} className="space-y-8">
			<div className="grid grid-cols-1 gap-4">
				<div className="text-right">
					<label className="mb-2 block text-sm font-medium text-slate-700">
						نام و نام خانوادگی
					</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={onChange}
						className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
						placeholder="مثلاً: علی رضایی"
					/>
					<p className="mt-2 text-xs leading-6 text-gray-500">
						این نام در بخش‌های مختلف سایت به‌عنوان نام قابل نمایش شما نمایش داده
						می‌شود.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="text-right">
					<label className="mb-2 block text-sm font-medium text-slate-700">
						ایمیل
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={onChange}
						className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
						placeholder="example@email.com"
						dir="ltr"
					/>
				</div>

				<div className="text-right">
					<label className="mb-2 block text-sm font-medium text-slate-700">
						شماره موبایل
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={onChange}
						className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
						placeholder="09xxxxxxxxx"
						dir="ltr"
					/>
				</div>
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
					className="inline-flex items-center justify-center rounded-xl bg-[#d4b055] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c6a146] disabled:cursor-not-allowed disabled:opacity-60"
				>
					{loading ? "در حال ذخیره..." : "ذخیره اطلاعات حساب"}
				</button>
			</div>
		</form>
	);
}
