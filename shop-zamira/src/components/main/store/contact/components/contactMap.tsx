export default function ContactMap() {
	return (
		<section className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
			<div className="mb-4">
				<h2 className="text-xl font-bold text-slate-900">آدرس فروشگاه</h2>
				<p className="mt-2 text-sm leading-7 text-slate-600">
					برای مراجعه حضوری یا هماهنگی بیشتر، می‌توانید از طریق اطلاعات تماس یا
					آدرس زیر با ما در ارتباط باشید.
				</p>
			</div>

			<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.6188222789647!2d51.40929992485485!3d35.739121017761846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014ac9f65c39%3A0xfc416c6f396b9c86!2sSaei%20Park!5e0!3m2!1sen!2s!4v1780223887767!5m2!1sen!2s"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="min-h-[260px] w-full sm:min-h-[320px]"
				></iframe>
			</div>
		</section>
	);
}
