import ResultPage from "@/components/main/store/checkout/components/resultPage";

type PageProps = {
	searchParams: Promise<{
		status?: string;
		type?: string;
		orderId?: string;
	}>;
};

export default async function Page({ searchParams }: PageProps) {
	const params = await searchParams;

	return <ResultPage searchParams={params} />;
}
