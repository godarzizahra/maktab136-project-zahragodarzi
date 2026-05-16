"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

// جلوگیری کامل از SSR
const Editor = dynamic(
	() => import("@tinymce/tinymce-react").then((m) => m.Editor),
	{
		ssr: false,
	},
);

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export default function RichEditor({ value, onChange }: Props) {
	const editorRef = useRef<any>(null);

	return (
		<div className="rounded-lg border border-gray-300 overflow-hidden bg-white">
			<Editor
				tinymceScriptSrc="/tinymce/tinymce.min.js"
				licenseKey="gpl"
				value={value}
				onEditorChange={(newValue) => onChange(newValue)}
				init={{
					height: 150,
					menubar: false,

					plugins: [
						"advlist",
						"autolink",
						"lists",
						"link",
						"charmap",
						"preview",
						"anchor",
						"searchreplace",
						"visualblocks",
						"code",
						"fullscreen",
						"insertdatetime",
						"media",
						"table",
						"help",
						"wordcount",
					],

					toolbar:
						"undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | removeformat | help",
				}}
			/>
		</div>
	);
}
