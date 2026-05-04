import { Eye, Pencil } from "lucide-react";
import { User } from "../../types/dashboardUsersType";
interface UserRowProps {
	user: User;
}
export default function UserRow({ user }: UserRowProps) {
	return (
		<tr className="border-b border-[var(--border)] text-[var(--text-primary)]">
			<td className="py-3 px-3 font-bold">{user.name}</td>
			<td className="py-3 px-3">{user.email}</td>
			<td className="py-3 px-3">{user.phone}</td>
			<td className="py-3 px-3">{user.role}</td>
			<td className="py-3 px-4">
				{new Date(user.createdAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-4">
				{new Date(user.updatedAt).toLocaleDateString("fa-IR")}
			</td>

			<td className="py-3 px-4 text-center">
				<div className="flex items-center justify-center gap-3">
					<button
						onClick={() => console.log(user._id)}
						className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
						title="مشاهده جزئیات"
					>
						<Eye size={16} className="text-blue-600 dark:text-blue-400" />
					</button>
					<button
						onClick={() => console.log("Edit user", user._id)}
						className="p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
						title="ویرایش"
					>
						<Pencil size={16} className="text-blue-600 dark:text-blue-400" />
					</button>
				</div>
			</td>
		</tr>
	);
}
