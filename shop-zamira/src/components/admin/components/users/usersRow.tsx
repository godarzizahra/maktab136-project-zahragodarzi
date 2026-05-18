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
		</tr>
	);
}
