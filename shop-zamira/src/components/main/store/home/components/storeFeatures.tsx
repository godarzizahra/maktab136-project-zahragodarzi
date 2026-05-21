import { storeFeatures } from "../constants/storeFeaturesData";

function StoreFeaturesSection() {
	return (
		<section className="w-full bg-[var(--background)] py-12 border-t border-[var(--border)]">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)]">
					{storeFeatures.map((feature) => {
						const Icon = feature.icon;

						return (
							<div
								key={feature.id}
								className="group flex flex-col items-center text-center gap-3 px-4 py-6 transition"
							>
								<div
									className="w-12 h-12 flex items-center justify-center rounded-xl
									bg-[var(--surface)]
									border border-[var(--border)]
									group-hover:border-[var(--accent)]
									transition-all duration-300"
								>
									<Icon
										className="w-6 h-6
										text-[var(--text-secondary)]
										group-hover:text-[var(--accent)]
										transition-colors"
									/>
								</div>

								<h3 className="text-sm md:text-base font-medium text-[var(--text-primary)]">
									{feature.title}
								</h3>

								<p className="text-xs md:text-sm text-[var(--text-secondary)]">
									{feature.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default StoreFeaturesSection;
