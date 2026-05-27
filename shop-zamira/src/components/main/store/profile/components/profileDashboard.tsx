"use client";

import { logoutUser } from "@/api/logout";
import { FileText, Heart, LogOut, MapPin, UserCircle } from "lucide-react";
import Link from "next/link";

const cards = [
	{
		title: "سفارش ها",
		href: "/profile/orders",
		icon: FileText,
	},
	{
		title: "آدرس",
		href: "/profile/address",
		icon: MapPin,
	},
	{
		title: "اطلاعات حساب کاربری",
		href: "/profile/account-details",
		icon: UserCircle,
	},
	{
		title: "علاقه مندی",
		href: "/profile/favorites",
		icon: Heart,
	},
];

export default function ProfileDashboard() {
	return (
		<div className="w-full rounded-2xl bg-white p-5 shadow-sm md:p-6">
			<div className="mb-8 border-b border-gray-100 pb-4 text-right">
				<p className="mb-2 text-base font-semibold text-slate-800 md:text-lg">
					سلام کاربر
					<span className="mr-2 text-sm font-normal text-slate-500">
						(اگر کاربر نیستید؟{" "}
						<button
							onClick={logoutUser}
							className="font-medium text-[var(--accent)]"
						>
							خارج شوید
						</button>
						)
					</span>
				</p>

				<p className="text-sm leading-7 text-slate-600">
					از پیشخوان حساب کاربری خود می‌توانید آخرین سفارش‌ها را ببینید، آدرس
					حمل و نقل و صورت حساب را مدیریت کنید و اطلاعات حساب کاربری و رمز عبور
					خود را تغییر دهید.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{cards.map((card) => {
					const Icon = card.icon;

					return (
						<Link
							key={card.href}
							href={card.href}
							className="flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md"
						>
							<Icon size={46} className="mb-4 text-slate-400" />
							<span className="text-base font-semibold text-slate-800">
								{card.title}
							</span>
						</Link>
					);
				})}

				<button
					onClick={logoutUser}
					className="flex min-h-[170px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-red-300 hover:bg-red-50"
				>
					<LogOut size={46} className="mb-4 text-slate-400" />
					<span className="text-base font-semibold text-slate-800">خروج</span>
				</button>
			</div>
		</div>
	);
}
