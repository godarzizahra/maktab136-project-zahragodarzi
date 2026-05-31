import { toPersian } from "@/utils/persianUtils";
import { Trash2 } from "lucide-react";

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
	const isRemovable = quantity <= 1;
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
