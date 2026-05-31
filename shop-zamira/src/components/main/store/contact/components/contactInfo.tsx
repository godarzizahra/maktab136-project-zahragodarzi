import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
	{
		icon: Phone,
		title: "تلفن تماس",
		content: (
			<>
				021-12345678
				<br />
				0912-123-4567
			</>
		),
	},
	{
		icon: Mail,
		title: "ایمیل",
		content: (
			<>
				info@zamira-shop.com
				<br />
				support@zamira-shop.com
			</>
		),
	},
	{
		icon: MapPin,
		title: "آدرس",
		content: "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳، واحد ۴",
	},
	{
		icon: Clock3,
		title: "ساعات پاسخگویی",
		content: (
			<>
				شنبه تا پنجشنبه
				<br />9 صبح تا 8 شب
			</>
		),
	},
];

export default function ContactInfoCards() {
	return (
		<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{contactItems.map((item, index) => {
				const Icon = item.icon;

				return (
					<div
						key={index}
						className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
					>
						<div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
							<Icon className="h-5 w-5" />
						</div>

						<h2 className="mb-2 text-base font-semibold text-slate-900">
							{item.title}
						</h2>

						<p className="text-sm leading-7 text-slate-600">{item.content}</p>
					</div>
				);
			})}
		</section>
	);
}
