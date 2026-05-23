"use client";
import { toPersian } from "@/utils/persianUtils";
import { format } from "date-fns-jalali";
import { Menu } from "lucide-react";
export default function HeaderDashboard({
	onMenuClick,
}: {
	onMenuClick: () => void;
}) {
	const today = format(new Date(), "yyyy/MM/dd");
	return (
		<header className=" h-20 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-8 rounded-2xl">
			<button
				onClick={onMenuClick}
				className="lg:hidden  text-[var(--text-primary)]"
			>
				<Menu size={24} />
			</button>
			<div className="flex flex-col">
				<h1 className="text-lg font-semibold text-[var(--text-primary)]">
					پنل مدیریت
				</h1>
				<span className="text-xs text-[var(--text-secondary)]">
					فروشگاه ساعت زامیرا
				</span>
			</div>

			<div className="flex items-center gap-3 cursor-pointer group">
				<div className="text-right hidden sm:flex flex-col gap-2">
					<span className="text-sm font-medium text-[var(--text-primary)]">
						ادمین عزیز خوش آمدید
					</span>
					<span className="text-[10px] text-[var(--text-secondary)] text-center">
						{toPersian(today)}
					</span>
				</div>
			</div>
		</header>
	);
}
