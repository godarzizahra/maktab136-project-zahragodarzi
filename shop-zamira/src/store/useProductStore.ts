import { create } from "zustand";

import { ProductFormData } from "@/components/admin/schema/modalProductSchema";
import {
	createProduct,
	deleteProduct,
	getProducts,
	updateProduct,
} from "@/components/admin/services/productService";

import { Product } from "@/components/admin/types/ProductsType";
import toast from "react-hot-toast";

interface ProductState {
	products: Product[];
	isLoading: boolean;
	error: string | null;

	search: string;
	page: number;
	totalPages: number;

	setSearch: (value: string) => void;
	setPage: (page: number) => void;

	fetchProducts: (search?: string, page?: number) => Promise<void>;
	addProduct: (data: ProductFormData) => Promise<void>;
	editProduct: (id: string | number, data: ProductFormData) => Promise<void>;
	deleteProduct: (id: string | number) => Promise<void>;

	updatePriceAndStock: (
		id: string | number,
		data: { price: number; stock: number },
	) => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
	products: [],
	isLoading: false,
	error: null,

	search: "",
	page: 1,
	totalPages: 1,

	setSearch: (value) => set({ search: value, page: 1 }),

	setPage: (page) => {
		set({ page });
		get().fetchProducts(undefined, page);
	},

	fetchProducts: async (searchParam, pageParam) => {
		set({ isLoading: true });

		try {
			const { search, page } = get();

			const searchValue = searchParam ?? search;
			const pageValue = pageParam ?? page;

			const res = await getProducts(pageValue, 10, searchValue);

			set({
				products: res.data ?? [],
				totalPages: res.pages ?? 1,
				page: res.page ?? pageValue,
				search: searchValue,
				isLoading: false,
				error: null,
			});
		} catch {
			set({
				error: "خطا در دریافت محصولات",
				isLoading: false,
				products: [],
			});
		}
	},

	addProduct: async (data) => {
		set({ isLoading: true });
		try {
			await createProduct(data);
			await get().fetchProducts();
			toast.success("محصول با موفقیت اضافه شد");
			set({ isLoading: false });
		} catch (err: any) {
			toast.error("خطا در افزودن محصول");
			set({ error: "خطا در افزودن محصول", isLoading: false });
			throw err;
		}
	},

	editProduct: async (id, data) => {
		set({ isLoading: true });
		try {
			await updateProduct(id, data);

			await get().fetchProducts();
			toast.success("محصول با موفقیت ویرایش شد");
			set({ isLoading: false });
		} catch (err: any) {
			toast.error("خطا در ویرایش محصول");
			set({ error: "خطا در ویرایش محصول", isLoading: false });
			throw err;
		}
	},

	deleteProduct: async (id) => {
		try {
			await deleteProduct(id);

			await get().fetchProducts();
			toast.success("محصول با موفقیت حذف شد");
		} catch {
			toast.error("خطا در حذف محصول");
			set({ error: "خطا در حذف محصول" });
		}
	},
	updatePriceAndStock: async (id, data) => {
		try {
			await updateProduct(id, data);

			set((state) => ({
				products: state.products.map((p) =>
					p._id === id ? { ...p, ...data } : p,
				),
			}));

			toast.success("قیمت و موجودی با موفقیت بروزرسانی شد");
		} catch {
			toast.error("خطا در بروزرسانی قیمت و موجودی");
		}
	},
}));
