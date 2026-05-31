import Accordion from "@/components/base/accordion";

export default function ProductDescription({
	description,
}: {
	description: string;
}) {
	return (
		<Accordion title="توضیحات محصول">
			<div
				className="container border rounded-2xl border-[var(--border)] p-3 leading-7 text-sm"
				dangerouslySetInnerHTML={{ __html: description || "" }}
			/>
		</Accordion>
	);
}
