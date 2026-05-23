import { Product } from "@/components/admin/types/ProductsType";
import Accordion from "@/components/base/accordion";

export default function ProductSpecifications({
	product,
}: {
	product: Product;
}) {
	const specs = [
		{ label: "کشور سازنده", value: product.country },
		{ label: "جنسیت", value: product.gender === "women" ? "زنانه" : "مردانه" },
		{ label: "وزن", value: product.weight ? `${product.weight} گرم` : null },
		{ label: "جنس بدنه", value: product.caseMaterial },
		{ label: "جنس بند", value: product.strapMaterial },
		{ label: "نوع موتور", value: product.movementType },
		{ label: "رنگ", value: product.color },
		{
			label: "گارانتی",
			value: product.warrantyMonths ? `${product.warrantyMonths} ماه` : null,
		},
	].filter((s) => s.value);
	const availableSpecs = specs.filter((item) => item.value);

	if (availableSpecs.length === 0) return null;
	return (
		<Accordion title="مشخصات کلی محصول">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-2xl">
				{specs.map((item, i) => (
					<div key={i} className="flex flex-col gap-1">
						<span className="text-gray-400 text-xs">{item.label}</span>
						<span className="text-sm font-semibold text-gray-800">
							{item.value}
						</span>
					</div>
				))}
			</div>
		</Accordion>
	);
}
