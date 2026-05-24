"use client";

type Props = {
	quantity: number;
	onIncrease: () => void;
	onDecrease: () => void;
};

export default function QuantityControl({
	quantity,
	onIncrease,
	onDecrease,
}: Props) {
	return (
		<div className="flex items-center border rounded-md overflow-hidden w-fit">
			<button
				onClick={onIncrease}
				className="w-10 h-10 flex items-center justify-center border-l"
			>
				+
			</button>
			<div className="w-12 h-10 flex items-center justify-center">
				{quantity}
			</div>
			<button
				onClick={onDecrease}
				className="w-10 h-10 flex items-center justify-center border-r"
			>
				-
			</button>
		</div>
	);
}
