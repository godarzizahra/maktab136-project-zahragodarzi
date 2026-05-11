export default function ProductDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	return <div>ProductDetailsPage:{slug}</div>;
}
