export function formatPrice(value: number) {
	return new Intl.NumberFormat("fa-IR").format(value);
}

export function toEnglishDigits(value: string) {
	return value
		.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
		.replace(/[^\d]/g, "");
}

export function formatCardNumber(value: string) {
	const digits = toEnglishDigits(value).slice(0, 16);
	return digits.replace(/(.{4})/g, "$1 ").trim();
}

export function validateCard(cardNumber: string) {
	const digits = toEnglishDigits(cardNumber);
	return digits.length === 16;
}

export function validateCVV2(cvv2: string) {
	return /^\d{3,4}$/.test(cvv2);
}

export function validateMonth(month: string) {
	const m = Number(month);
	return month.length === 2 && m >= 1 && m <= 12;
}

export function validateYear(year: string) {
	return /^\d{2}$/.test(year);
}

export function validatePassword(password: string) {
	return password.trim().length >= 4;
}
