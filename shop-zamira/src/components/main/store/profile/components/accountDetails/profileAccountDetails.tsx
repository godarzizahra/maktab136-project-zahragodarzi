"use client";

type Props = {
	defaultValues?: {
		Name?: string;
		email?: string;
		phone?: string;
	};
};

export default function ProfileAccountDetails({ defaultValues }: Props) {
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

			<form className="space-y-8">
				<div className="grid grid-cols-1 gap-4">
					<div className="text-right">
						<label className="mb-2 block text-sm font-medium text-slate-700">
							نام و نام خانوادگی
						</label>
						<input
							type="text"
							defaultValue={defaultValues?.Name || ""}
							className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
							placeholder="مثلاً: علی رضایی"
						/>
						<p className="mt-2 text-xs leading-6 text-gray-500">
							این نام در بخش‌های مختلف سایت به‌عنوان نام قابل نمایش شما نمایش
							داده می‌شود.
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
							defaultValue={defaultValues?.email || ""}
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
							defaultValue={defaultValues?.phone || ""}
							className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
							placeholder="09xxxxxxxxx"
							dir="ltr"
						/>
					</div>
				</div>

				<div className="border-t border-gray-200 pt-6">
					<h2 className="mb-4 text-right text-lg font-bold text-slate-900">
						تغییر رمز عبور
					</h2>

					<div className="space-y-4">
						<div className="text-right">
							<label className="mb-2 block text-sm font-medium text-slate-700">
								رمز عبور فعلی
							</label>
							<input
								type="password"
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
								className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#d4b055] focus:ring-2 focus:ring-[#d4b055]/20"
								placeholder="رمز عبور جدید را دوباره وارد کنید"
								dir="ltr"
							/>
						</div>
					</div>
				</div>

				<div className="flex justify-start">
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-xl bg-[#d4b055] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#c6a146]"
					>
						ذخیره تغییرات
					</button>
				</div>
			</form>
		</div>
	);
}
