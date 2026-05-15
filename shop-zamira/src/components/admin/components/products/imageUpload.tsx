"use client";

type Props = {
	onChange: (url: string) => void;
};

export default function ImageUpload({ onChange }: Props) {
	const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("file", file);

		const res = await fetch("/api/upload", {
			method: "POST",
			body: formData,
		});

		const data = await res.json();

		onChange(data.url);
	};

	return <input type="file" accept="image/*" onChange={handleUpload} />;
}
