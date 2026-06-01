import { Search } from "lucide-react";

type Props = {
	onClick: () => void;
};

export default function SearchIcon({ onClick }: Props) {
	return (
		<button
			onClick={onClick}
			className="transition hover:text-[var(--accent)]"
			aria-label="جستجو"
		>
			<Search size={24} />
		</button>
	);
}
