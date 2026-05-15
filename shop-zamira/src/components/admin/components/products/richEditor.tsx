"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

type Props = {
	value: string;
	onChange: (value: string) => void;
};

export default function RichEditor({ value, onChange }: Props) {
	const editor = useEditor({
		extensions: [StarterKit],
		content: value,
		editorProps: {
			attributes: {
				class: "min-h-[150px] p-3 outline-none",
			},
		},
		onUpdate({ editor }) {
			onChange(editor.getHTML());
		},
	});

	useEffect(() => {
		if (!editor) return;

		if (value !== editor.getHTML()) {
			editor.commands.setContent(value);
		}
	}, [value, editor]);

	if (!editor) return null;

	return (
		<div className="border rounded-lg">
			<EditorContent editor={editor} />
		</div>
	);
}
