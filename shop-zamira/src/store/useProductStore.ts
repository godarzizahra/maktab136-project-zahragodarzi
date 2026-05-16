import { create } from "zustand";

import {
	Product,
	ProductFormData,
} from "@/components/admin/schema/modalProductSchema";
import {
	createProduct,
	deleteProduct,
	getProducts,
	updateProduct,
} from "@/components/admin/services/productService";

interface ProductState {
	products: Product[];
	isLoading: boolean;
	error: string | null;

	// اکشن‌ها
	fetchProducts: () => Promise<void>;
	addProduct: (data: ProductFormData) => Promise<void>;
	editProduct: (id: string | number, data: ProductFormData) => Promise<void>;
	deleteProduct: (id: string | number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
	products: [],
	isLoading: false,
	error: null,

	fetchProducts: async () => {
		set({ isLoading: true, error: null });
		try {
			const data = await getProducts();
			set({ products: data.products, isLoading: false });
		} catch (err: any) {
			set({ error: "خطا در دریافت محصولات", isLoading: false });
		}
	},

	addProduct: async (data) => {
		set({ isLoading: true });
		try {
			const newProduct = await createProduct(data);
			set((state) => ({
				products: [...state.products, newProduct],
				isLoading: false,
			}));
		} catch (err: any) {
			set({ error: "خطا در افزودن محصول", isLoading: false });
			throw err;
		}
	},

	editProduct: async (id, data) => {
		set({ isLoading: true });
		try {
			const updatedProduct = await updateProduct(id, data);
			set((state) => ({
				products: state.products.map((p) => (p.id === id ? updatedProduct : p)),

				isLoading: false,
			}));
		} catch (err: any) {
			set({ error: "خطا در ویرایش محصول", isLoading: false });
			throw err;
		}
	},

	deleteProduct: async (id) => {
		try {
			await deleteProduct(id);
			set((state) => ({
				products: state.products.filter((p) => p.id !== id),
			}));
		} catch (err: any) {
			set({ error: "خطا در حذف محصول" });
		}
	},
}));
