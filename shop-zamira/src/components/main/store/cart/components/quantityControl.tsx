import { toPersian } from "@/utils/persianUtils";

type Props = {
	quantity: number;
	onIncrease?: () => void;
	onDecrease?: () => void;
};

export default function QuantityControl({
	quantity,
	onIncrease,
	onDecrease,
}: Props) {
	return (
		<div className="inline-flex items-center border border-gray-200 rounded-3xl overflow-hidden">
			<button
				onClick={onIncrease}
				className="w-10 h-10 flex items-center justify-center cursor-pointer
				"
				type="button"
			>
				+
			</button>

			<div className="w-10 h-10 flex items-center justify-center text-sm ">
				{toPersian(`${quantity}`)}
			</div>

			<button
				onClick={onDecrease}
				className="w-10 h-10 flex items-center justify-center cursor-pointer"
				type="button"
			>
				-
			</button>
		</div>
	);
}
