export function createQueryString(
	searchParams: URLSearchParams,
	paramsToUpdate: Record<string, string | null>,
) {
	const params = new URLSearchParams(searchParams.toString());

	Object.entries(paramsToUpdate).forEach(([key, value]) => {
		if (!value) {
			params.delete(key);
		} else {
			params.set(key, value);
		}
	});

	return params.toString();
}
