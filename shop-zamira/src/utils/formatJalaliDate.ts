import { format } from "date-fns-jalali";

export function formatJalaliDate(date: string) {
	return format(new Date(date), "d MMMM yyyy");
}
