import type { Metadata } from "next";

import AboutFeatures from "./aboutFeatures";
import AboutHero from "./aboutHero";
import AboutMission from "./aboutMission";

export const metadata: Metadata = {
	title: "درباره ما | زامیرا",
	description:
		"با زامیرا بیشتر آشنا شوید؛ فروشگاهی برای ارائه محصولات باکیفیت، تجربه خرید مطمئن و پشتیبانی قابل اعتماد.",
};

export default function AboutPage() {
	return (
		<main className="bg-white text-slate-800">
			<AboutHero />
			<AboutFeatures />
			<AboutMission />
		</main>
	);
}
