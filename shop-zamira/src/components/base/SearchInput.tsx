import { Search } from "lucide-react";

type Props = {
	value?: string;
	onChange: (value: string) => void;
	placeholder?: string;
	onEnter?: () => void;
};

export default function SearchInput({
	value,
	onChange,
	placeholder = "جستجو...",
	onEnter,
}: Props) {
	return (
		<div className="relative w-full sm:w-64">
			<Search
				size={18}
				className="absolute left-3 top-2.5 text-[var(--text-secondary)]"
			/>

			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-[var(--border)] placeholder:text-[var(--text-secondary)] transition"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onEnter?.();
					}
				}}
			/>
		</div>
	);
}
