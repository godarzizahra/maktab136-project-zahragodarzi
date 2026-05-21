import Link from "next/link";

export default function NotFound() {
	return (
		<div className="h-screen flex flex-col items-center justify-center gap-4">
			<h1 className="text-2xl font-bold">محصول مورد نظر پیدا نشد 😕</h1>

			<Link href="/products" className="text-primary underline">
				بازگشت به لیست محصولات
			</Link>
		</div>
	);
}
