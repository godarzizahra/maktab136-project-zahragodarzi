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
		<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
			<div className="mb-8 text-right">
				<p className="mb-2 text-lg font-semibold text-gray-800">
					سلام کاربر
					<span className="mr-2 text-sm font-normal text-gray-500">
						(اگر کاربر نیستید؟{" "}
						<button onClick={logoutUser} className="text-[var(--accent)]">
							خارج شوید
						</button>
						)
					</span>
				</p>

				<p className="text-sm leading-7 text-gray-600">
					از پیشخوان حساب کاربری خود می‌توانید آخرین سفارش‌ها را ببینید، به
					راحتی آدرس حمل و نقل و صورت حساب را مدیریت کنید و اطلاعات حساب کاربری
					و رمز عبور را تغییر دهید.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{cards.map((card) => {
					const Icon = card.icon;

					return (
						<Link
							key={card.href}
							href={card.href}
							className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md"
						>
							<Icon size={48} className="mb-4 text-gray-400" />
							<span className="text-base font-semibold text-gray-800">
								{card.title}
							</span>
						</Link>
					);
				})}

				<button
					onClick={logoutUser}
					className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:border-[var(--accent)] hover:shadow-md"
				>
					<LogOut size={48} className="mb-4 text-gray-400" />
					<span className="text-base font-semibold text-gray-800">خروج</span>
				</button>
			</div>
		</div>
	);
}
