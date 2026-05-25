export type TouchedFields = {
	cardNumber: boolean;
	cvv2: boolean;
	expMonth: boolean;
	expYear: boolean;
	password: boolean;
};

export type PaymentCardFormProps = {
	cardNumber: string;
	cvv2: string;
	expMonth: string;
	expYear: string;
	password: string;
	errors: {
		cardNumber: string;
		cvv2: string;
		expMonth: string;
		expYear: string;
		password: string;
	};
	submitLoading: boolean;
	onCardNumberChange: (value: string) => void;
	onCvv2Change: (value: string) => void;
	onExpMonthChange: (value: string) => void;
	onExpYearChange: (value: string) => void;
	onPasswordChange: (value: string) => void;
	onBlurField: (field: keyof TouchedFields) => void;
	onCancel: () => void;
	onSubmit: () => void;
};
