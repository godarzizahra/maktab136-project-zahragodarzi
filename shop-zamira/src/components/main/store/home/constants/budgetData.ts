import { BudgetItem } from "../types/budgetType";

export const budgetOptions: BudgetItem[] = [
	{
		id: 1,
		label: "زیر ۵ میلیون تومان",
		link: "/search?maxPrice=5000000",
		side: "right",
	},
	{
		id: 2,
		label: "بین ۵ تا ۱۰ میلیون تومان",
		link: "/search?minPrice=5000000&maxPrice=10000000",
		side: "right",
	},
	{
		id: 3,
		label: "بین ۱۰ تا ۱۵ میلیون تومان",
		link: "/search?minPrice=10000000&maxPrice=15000000",
		side: "right",
	},
	{
		id: 4,
		label: "بین ۱۵ تا ۲۰ میلیون تومان",
		link: "/search?minPrice=15000000&maxPrice=20000000",
		side: "left",
	},
	{
		id: 5,
		label: "بین ۲۰ تا ۳۰ میلیون تومان",
		link: "/search?minPrice=20000000&maxPrice=30000000",
		side: "left",
	},
	{
		id: 6,
		label: "بالای ۳۰ میلیون تومان",
		link: "/search?minPrice=30000000",
		side: "left",
	},
];
