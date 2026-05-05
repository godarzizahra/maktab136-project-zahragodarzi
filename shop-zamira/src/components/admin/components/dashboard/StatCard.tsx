export default function StatCard({
	title,
	value,
}: {
	title: string;
	value: string;
}) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
			<p className="text-sm text-[var(--text-secondary)]">{title}</p>
			<p className="text-3xl font-bold text-[var(--text-primary)] mt-2">
				{value}
			</p>
		</div>
	);
}
