export interface SalesItem {
	month: string;
	sales: number;
}

export interface UsersItem {
	month: string;
	users: number;
}

export interface DashboardData {
	totalUsers: number;
	totalOrders: number;
	totalRevenue: number;
	salesData: SalesItem[];
	usersData: UsersItem[];
}
