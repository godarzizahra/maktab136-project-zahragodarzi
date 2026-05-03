export interface Product {
	id: string;
	name: string;
	category: string;
	price: number;
	stock: number;

	images: string;
}

export interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
