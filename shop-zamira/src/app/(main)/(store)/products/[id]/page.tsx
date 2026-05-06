export default function ProductDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	return <div>ProductDetailsPage:{id}</div>;
}
