export default function ProductDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = params;
	return (
		<div className="w-full h-screen flex items-center justify-center">
			ProductDetailsPage: {slug}
		</div>
	);
}
