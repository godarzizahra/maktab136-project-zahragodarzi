export interface Product {
	_id: string;
	name: string;
	description: string;
	price: number;
	images: string[];
	category: string;
	stock: number;
	rating: number;
	numReviews: number;
	isActive: boolean;
	createdAt: string;
	updatedAt: string;
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
