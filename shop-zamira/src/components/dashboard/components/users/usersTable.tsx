import { User } from "../../types/dashboardUsersType";
import UserRow from "./usersRow";

interface UsersTableProps {
	users: User[];
}
export default function UsersTable({ users }: UsersTableProps) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden">
			<div className="max-h-[400px] overflow-y-auto custom-scroll">
				<table className="w-full text-sm">
					<thead className="bg-[var(--muted)] text-[var(--accent)] sticky top-0">
						<tr>
							<th className="text-right p-3">نام کاربر </th>
							<th className="text-right p-3">ایمیل </th>
							<th className="text-right p-3"> تلفن</th>
							<th className="text-right p-3"> نوع دسترسی</th>
							<th className="text-right p-3">تاریخ ایجادحساب </th>
							<th className="text-right p-3">تاریخ بروزرسانی</th>
							<th className="text-center p-3"></th>
						</tr>
					</thead>

					<tbody>
						{users?.length > 0 ? (
							users.map((user) => <UserRow key={user._id} user={user} />)
						) : (
							<tr>
								<td colSpan={9} className="text-center py-4 text-gray-500">
									کاربری یافت نشد
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
