import { Headphones, ShieldCheck, Sparkles, Truck } from "lucide-react";

const features = [
	{
		icon: ShieldCheck,
		title: "ضمانت کیفیت",
		description:
			"ما تلاش می‌کنیم محصولاتی را ارائه دهیم که از نظر کیفیت، اصالت و رضایت مشتری در سطح بالایی باشند.",
	},
	{
		icon: Truck,
		title: "ارسال سریع",
		description:
			"سفارش‌های شما در سریع‌ترین زمان ممکن پردازش و ارسال می‌شوند تا تجربه خریدی راحت داشته باشید.",
	},
	{
		icon: Headphones,
		title: "پشتیبانی پاسخ‌گو",
		description:
			"تیم پشتیبانی ما آماده است تا در مراحل خرید، پیگیری سفارش و پاسخ به سوالات همراه شما باشد.",
	},
	{
		icon: Sparkles,
		title: "تجربه خرید بهتر",
		description:
			"هدف ما فقط فروش نیست؛ می‌خواهیم تجربه‌ای ساده، شفاف و لذت‌بخش از خرید آنلاین ایجاد کنیم.",
	},
];

export default function AboutFeatures() {
	return (
		<section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
					<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
						چرا زامیرا؟
					</h2>
					<p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
						چند مورد از ارزش‌هایی که سعی می‌کنیم هر روز در خدمات و تجربه خرید
						شما پیاده کنیم.
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
					{features.map((feature) => {
						const Icon = feature.icon;

						return (
							<div
								key={feature.title}
								className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6"
							>
								<div className="mb-4 inline-flex rounded-2xl bg-[var(--accent)]/10 p-3 text-[var(--accent)]">
									<Icon size={24} />
								</div>

								<h3 className="mb-3 text-lg font-bold text-slate-900">
									{feature.title}
								</h3>

								<p className="text-sm leading-7 text-slate-600">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
