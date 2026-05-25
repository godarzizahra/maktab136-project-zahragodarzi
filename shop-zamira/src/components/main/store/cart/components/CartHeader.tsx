export default function CartHeader() {
	return (
		<div className="hidden md:grid md:grid-cols-12 gap-4 border-b py-4 mb-4 text-sm text-[var(--text-secondary)]">
			<div className="md:col-span-5">محصول</div>
			<div className="md:col-span-2 text-center">قیمت</div>
			<div className="md:col-span-2 text-center">تعداد</div>
			<div className="md:col-span-3 text-left">جمع کل</div>
		</div>
	);
}
