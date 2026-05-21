export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center gap-6">
				<div className="relative w-20 h-20 rounded-full border-2 border-[var(--border)] bg-[var(--surface)] flex items-center justify-center shadow-sm">
					<div className="absolute inset-1 rounded-full border border-[var(--accent)] opacity-40" />

					<div className="absolute w-[2px] h-7 bg-[var(--accent)] origin-bottom animate-watch-hand bottom-1/2" />

					<div className="w-2 h-2 rounded-full bg-[var(--accent)] z-10" />
				</div>

				<span className="text-xs tracking-[0.4em] text-[var(--text-secondary)]">
					ZAMIRA
				</span>
			</div>
		</div>
	);
}
