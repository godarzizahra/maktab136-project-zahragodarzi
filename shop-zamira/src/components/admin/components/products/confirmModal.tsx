type ConfirmModalProps = {
	isOpen: boolean;
	title?: string;
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
};

export default function ConfirmModal({
	isOpen,
	title = "تأیید حذف",
	message,
	onConfirm,
	onCancel,
}: ConfirmModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg">
			<div className="bg-[var(--surface)] rounded-xl p-6 w-[90%] max-w-md shadow-lg">
				<h3 className="text-lg font-semibold mb-3">{title}</h3>

				<p className="text-sm text-[var(--text-secondary)] mb-6">{message}</p>

				<div className="flex justify-end gap-3">
					<button
						onClick={onCancel}
						className="px-4 py-2 rounded-md border bg-gray-300 hover:bg-gray-100"
					>
						انصراف
					</button>

					<button
						onClick={onConfirm}
						className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
					>
						حذف
					</button>
				</div>
			</div>
		</div>
	);
}
