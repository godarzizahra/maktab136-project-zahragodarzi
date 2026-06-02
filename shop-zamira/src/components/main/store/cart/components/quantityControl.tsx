import { toPersian } from "@/utils/persianUtils";
import { Trash2 } from "lucide-react";

type Props = {
	quantity: number;
	max?: number;
	onIncrease?: () => void;
	onDecrease?: () => void;
};

export default function QuantityControl({
	quantity,
	max = 3,
	onIncrease,
	onDecrease,
}: Props) {
	const isRemovable = quantity <= 1;
	const isMaxReached = quantity >= max;
	return (
		<div className="inline-flex items-center border border-gray-200 rounded-3xl overflow-hidden">
			<button
				onClick={onIncrease}
				disabled={isMaxReached}
				className="flex h-10 w-10 cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
				type="button"
			>
				+
			</button>

			<div className="w-10 h-10 flex items-center justify-center text-sm ">
				{toPersian(`${quantity}`)}
			</div>

			<button
				onClick={() => onDecrease?.()}
				className="w-10 h-10 flex items-center justify-center cursor-pointer"
				type="button"
				aria-label={isRemovable ? "حذف محصول" : "کاهش تعداد"}
			>
				{isRemovable ? <Trash2 size={16} /> : "-"}
			</button>
		</div>
	);
}
