import { brands } from "../../home/constants/brandsData";

export default function ProductFilters() {
	return (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-[var(--text-secondary)] mb-2">محدوده قیمت</p>
				<input type="range" className="w-full accent-[var(--accent)]" />
			</div>

			<div>
				<p className="text-sm text-[var(--text-secondary)] mb-2">برند</p>
				<div className="space-y-2 text-sm">
					{brands.map((item) => (
						<label key={item.id} className="flex gap-2">
							<input type="checkbox" />
							{item.name}
						</label>
					))}
				</div>
			</div>
		</div>
	);
}
