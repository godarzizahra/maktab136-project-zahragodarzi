export default function ProductsHeader() {
	return (
		<div className="flex items-center justify-between mb-6">
			<h1 className="text-2xl font-bold text-[var(--text-primary)]">محصولات</h1>

			<button className="bg-[var(--accent)] text-black px-4 py-2 rounded-lg text-sm">
				افزودن محصول
			</button>
		</div>
	);
}
