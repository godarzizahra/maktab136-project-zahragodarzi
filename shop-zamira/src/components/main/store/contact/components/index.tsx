import ContactHero from "./contactHero";
import ContactInfoCards from "./contactInfo";
import ContactMap from "./contactMap";

export default function ContactPage() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
				<ContactHero />

				<div className="mt-10">
					<ContactInfoCards />
				</div>

				<div className="mt-10">
					<ContactMap />
				</div>
			</div>
		</div>
	);
}
