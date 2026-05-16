import { API_BASE_URL } from "@/api/baseUrl";
import { useEffect, useRef, useState } from "react";

type Props = {
	onChange: (urls: string[]) => void;
	initialImages?: string[];
};

export default function ImageUpload({ onChange, initialImages = [] }: Props) {
	const [imageUrls, setImageUrls] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement | null>(null);

	// وقتی در حالت ادیت تصاویر اولیه می‌آیند
	useEffect(() => {
		if (initialImages.length) {
			setImageUrls(initialImages);
		}
	}, [initialImages]);

	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files) return;

		const uploadedUrls: string[] = [];

		for (const file of Array.from(files)) {
			const formData = new FormData();
			formData.append("file", file);

			try {
				const res = await fetch(`${API_BASE_URL}/api/upload`, {
					method: "POST",
					body: formData,
					credentials: "include",
				});

				if (!res.ok) {
					console.error("Upload failed:", res.status, await res.text());
					continue;
				}

				const data = await res.json();

				if (data.url) {
					uploadedUrls.push(data.url);
				}
			} catch (error) {
				console.error("Error uploading file:", error);
			}
		}

		const newImageUrls = [...imageUrls, ...uploadedUrls];
		setImageUrls(newImageUrls);
		onChange(newImageUrls);

		if (inputRef.current) inputRef.current.value = "";
	};

	const removeImage = (index: number) => {
		const updatedUrls = imageUrls.filter((_, i) => i !== index);
		setImageUrls(updatedUrls);
		onChange(updatedUrls);
	};

	const fixImagePath = (url: string) => {
		if (url.startsWith("/uploads/products/")) {
			return `http://localhost:5000${url}`;
		}
		return `http://localhost:5000${url.replace("/uploads/", "/uploads/products/")}`;
	};

	return (
		<div className="flex flex-col gap-4">
			<input
				ref={inputRef}
				type="file"
				accept="image/*"
				multiple
				onChange={handleUpload}
				className="hidden"
			/>

			<button
				type="button"
				onClick={() => inputRef.current?.click()}
				className="px-4 py-2 bg-blue-600 text-white rounded-md w-fit"
			>
				انتخاب تصویر
			</button>

			<div className="flex gap-3 flex-wrap">
				{imageUrls.map((url, i) => (
					<div key={url} className="relative group">
						<img
							src={fixImagePath(url)}
							alt="preview"
							className="w-24 h-24 object-cover rounded border"
						/>

						<button
							type="button"
							onClick={() => removeImage(i)}
							className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-sm flex items-center justify-center shadow-md"
						>
							×
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
