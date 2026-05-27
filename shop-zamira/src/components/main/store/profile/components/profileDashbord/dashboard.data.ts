import { FileText, Heart, MapPin, UserCircle } from "lucide-react";

export const dashboardCards = [
	{
		title: "سفارش ها",
		href: "/profile/orders",
		icon: FileText,
	},
	{
		title: "آدرس",
		href: "/profile/address",
		icon: MapPin,
	},
	{
		title: "اطلاعات حساب کاربری",
		href: "/profile/accountDetails",
		icon: UserCircle,
	},
	{
		title: "علاقه مندی",
		href: "/profile/wishlist",
		icon: Heart,
	},
];
