export interface Product {
	_id: string;
	name: string;
	category: string;
	price: number;
	stock: number;
	createdAt: string;
	updatedAt: string;
	images: string;
}

export interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}
