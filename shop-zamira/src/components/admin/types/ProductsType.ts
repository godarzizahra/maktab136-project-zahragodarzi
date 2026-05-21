export interface Product {
	_id: string | number;
	name: string;
	category: string;
	description: string;
	price: number;
	stock: number;
	createdAt: string | string[];
	updatedAt: string;
	images: string[];
	rating: number;
	numReviews: number;
	isActive: boolean;
	brand: string;
}

export interface PaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export interface ProductsResponse {
	success: boolean;
	count: number;
	total: number;
	page: number;
	pages: number;
	data: Product[];
}
