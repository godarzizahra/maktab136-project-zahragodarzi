export default function ProductCardSkeleton() {
	return (
		<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm animate-pulse">
			<div className="aspect-[3/4] w-full bg-gray-200" />
			<div className="space-y-3 p-4">
				<div className="h-4 w-3/4 rounded bg-gray-200" />
				<div className="h-4 w-1/2 rounded bg-gray-200" />
				<div className="h-10 w-full rounded bg-gray-200" />
			</div>
		</div>
	);
}
