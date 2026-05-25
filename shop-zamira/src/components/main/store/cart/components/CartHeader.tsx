export default function CartHeader() {
	return (
		<div className="grid grid-cols-12 gap-19 border-b py-4  mb-2 text-sm text-[var(--text-secondary)]">
			<div className="col-span-5">محصول</div>
			<div className="col-span-2">قیمت </div>
			<div className="col-span-2">تعداد</div>
			<div className="col-span-3">جمع کل </div>
		</div>
	);
}
