import about from "@/assets/image/img-about.png";
import Image from "next/image";
export default function AboutHero() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
			<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
				<div className="space-y-5 text-center sm:space-y-6 lg:text-right">
					<h1 className="text-2xl font-extrabold leading-relaxed text-slate-900 sm:text-3xl lg:text-5xl">
						ما در زامیرا تلاش می‌کنیم خرید آنلاین را ساده، مطمئن و دل‌نشین کنیم
					</h1>

					<p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
						زامیرا با هدف ارائه محصولات باکیفیت و ایجاد تجربه‌ای حرفه‌ای برای
						مشتریان شکل گرفته است. ما باور داریم خرید اینترنتی فقط انتخاب و
						پرداخت نیست؛ بلکه مجموعه‌ای از اعتماد، شفافیت، پشتیبانی و تحویل
						به‌موقع است.
					</p>

					<p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
						به همین دلیل در تمام مراحل، از انتخاب محصولات تا ثبت سفارش و خدمات
						پس از خرید، تلاش می‌کنیم همراه مطمئن شما باشیم.
					</p>
				</div>

				<div className="relative">
					<div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-4 shadow-sm sm:p-6 lg:p-8">
						<div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 p-4 sm:min-h-[300px] sm:p-6 lg:min-h-[360px]">
							<Image
								src={about}
								alt="About Zamira watch store"
								width={600}
								className="h-auto w-full max-w-[520px] rounded-2xl object-contain"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
