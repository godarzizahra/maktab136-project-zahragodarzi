"use client";

type Props = {
	name?: string;
	onLogout: () => void;
};

export default function DashboardWelcome({ name, onLogout }: Props) {
	return (
		<div className="mb-8 border-b border-gray-100 pb-4 text-right">
			<p className="mb-2 text-base font-semibold text-slate-800 md:text-lg">
				سلام {name}
				<span className="mr-2 text-sm font-normal text-slate-500">
					(اگر {name} نیستید؟{" "}
					<button
						onClick={onLogout}
						className="font-medium text-[var(--accent)]"
					>
						خارج شوید
					</button>
					)
				</span>
			</p>

			<p className="text-sm leading-7 text-slate-600">
				از پیشخوان حساب کاربری خود می‌توانید آخرین سفارش‌ها را ببینید، آدرس حمل
				و نقل و صورت حساب را مدیریت کنید و اطلاعات حساب کاربری و رمز عبور خود را
				تغییر دهید.
			</p>
		</div>
	);
}
