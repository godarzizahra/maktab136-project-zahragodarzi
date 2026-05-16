export interface Product {
	_id: string | number;
	name: string;
	category: string;
	brand: string;
	price: number;
	stock: number;
	description: string;
	createdAt: string | string[];
	updatedAt: string;
	images: string[];
}

export interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
