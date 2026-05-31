"use client";

type ConfirmModalProps = {
	open: boolean;
	title?: string;
	description?: string;
	confirmText?: string;
	cancelText?: string;
	loading?: boolean;
	onConfirm: () => void | Promise<void>;
	onCancel: () => void;
};

export default function ConfirmModal({
	open,
	title = "تایید عملیات",
	description = "آیا مطمئن هستید؟",
	confirmText = "تایید",
	cancelText = "انصراف",
	loading = false,
	onConfirm,
	onCancel,
}: ConfirmModalProps) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-lg">
			<div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
				<h3 className="mb-2 text-lg font-bold text-gray-800">{title}</h3>
				<p className="mb-6 text-sm text-gray-600">{description}</p>

				<div className="flex items-center justify-end gap-3">
					<button
						type="button"
						onClick={onConfirm}
						disabled={loading}
						className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-50"
					>
						{loading ? "در حال انجام..." : confirmText}
					</button>
					<button
						type="button"
						onClick={onCancel}
						disabled={loading}
						className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
					>
						{cancelText}
					</button>
				</div>
			</div>
		</div>
	);
}
