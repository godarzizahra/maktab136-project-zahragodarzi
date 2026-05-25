type InputFieldProps = {
	label?: string;
	value: string;
	onChange: (value: string) => void;
	onBlur?: () => void;
	placeholder?: string;
	error?: string;
	type?: string;
	inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

export default function InputField({
	label,
	value,
	onChange,
	onBlur,
	placeholder,
	error,
	type = "text",
	inputMode = "text",
}: InputFieldProps) {
	return (
		<div>
			{label && (
				<label className="mb-2 block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}

			<input
				type={type}
				inputMode={inputMode}
				dir="ltr"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onBlur={onBlur}
				placeholder={placeholder}
				className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
			/>

			{error && <p className="mt-2 text-sm text-red-500">{error}</p>}
		</div>
	);
}
