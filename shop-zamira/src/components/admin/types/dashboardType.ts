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

export interface SalesItem {
	month: string;
	sales: number;
}

export interface UsersItem {
	month: string;
	users: number;
}

export interface DashboardStats {
	totalSales: string;
	totalUsers: number;
	totalOrders: number;
}
