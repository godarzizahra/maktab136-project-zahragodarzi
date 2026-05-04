"use client";

import { mockUsers } from "../../constants/mockUsers";
import UsersHeader from "./usersHeader";
import UsersTable from "./usersTable";

export default function UsersPageClient() {
	return (
		<div>
			<UsersHeader />
			<UsersTable users={mockUsers} />
		</div>
	);
}
