"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	productSchema,
	type ProductFormData,
} from "../../schema/modalProductSchema";
import ImageUpload from "./imageUpload";
import RichEditor from "./richEditor";

import { useProductStore } from "@/store/useProductStore";
import { BRAND_LIST, CATEGORY_LIST } from "../../constants/brand&categoryData";
import { Product } from "../../types/dashboardProductsType";

type Props = {
	product?: Product;
	onClose: () => void;
};

export default function ProductForm({ product, onClose }: Props) {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<ProductFormData>({
		resolver: zodResolver(productSchema),
		mode: "onSubmit",
		defaultValues: {
			name: product?.name || "",
			brand: product?.brand || "",
			price: product?.price ?? 0,
			stock: product?.stock ?? 0,
			category: Array.isArray(product?.category)
				? product.category
				: product?.category
					? product.category.split(",")
					: [],
			description: product?.description || "",
			images: product?.images || [],
		},
	});

	const description = watch("description");

	const { addProduct, editProduct } = useProductStore();

	const onSubmit = async (data: ProductFormData) => {
		try {
			if (product?._id) {
				await editProduct(product._id, data);
			} else {
				await addProduct(data);
			}

			onClose();
		} catch (error) {}
	};

	return (
		<div className="flex flex-col max-h-[80vh]">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex-1 overflow-y-auto space-y-6 p-4"
			>
				{/* inputs */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<input
							placeholder="نام محصول"
							{...register("name")}
							className="w-full border p-2 rounded text-black"
						/>
						{errors.name && (
							<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
						)}
					</div>

					<div>
						<select
							{...register("brand")}
							className="w-full border p-2 rounded text-black"
						>
							<option value="">انتخاب برند</option>
							{BRAND_LIST.map((brand) => (
								<option key={brand} value={brand}>
									{brand}
								</option>
							))}
						</select>
						{errors.brand && (
							<p className="text-red-500 text-xs mt-1">
								{errors.brand.message}
							</p>
						)}
					</div>

					<div>
						<input
							type="number"
							placeholder="قیمت محصول"
							{...register("price", { valueAsNumber: true })}
							className="w-full border p-2 rounded text-black"
						/>
						{errors.price && (
							<p className="text-red-500 text-xs mt-1">
								{errors.price.message}
							</p>
						)}
					</div>

					<div>
						<input
							type="number"
							placeholder="تعداد موجودی"
							{...register("stock", { valueAsNumber: true })}
							className="w-full border p-2 rounded text-black"
						/>
						{errors.stock && (
							<p className="text-red-500 text-xs mt-1">
								{errors.stock.message}
							</p>
						)}
					</div>
				</div>

				{/* category */}
				<div className="space-y-2">
					<p className="font-medium text-sm">دسته بندی محصول</p>

					<div className="flex flex-wrap gap-4">
						{CATEGORY_LIST.map((cat) => (
							<label key={cat} className="flex items-center gap-2 text-sm">
								<input type="checkbox" value={cat} {...register("category")} />
								{cat}
							</label>
						))}
					</div>

					{errors.category && (
						<p className="text-red-500 text-xs">{errors.category.message}</p>
					)}
				</div>

				{/* description */}
				<div className="space-y-2">
					<p className="font-medium text-sm">توضیحات</p>
					<RichEditor
						value={description}
						onChange={(value) =>
							setValue("description", value, { shouldValidate: true })
						}
					/>

					{errors.description && (
						<p className="text-red-500 text-xs mt-1">
							{errors.description.message}
						</p>
					)}
				</div>

				{/* images */}
				<div className="space-y-2">
					<p className="font-medium text-sm">تصویر محصول</p>

					<ImageUpload
						initialImages={product?.images}
						onChange={(urls) =>
							setValue("images", urls, { shouldValidate: true })
						}
					/>

					{errors.images && (
						<p className="text-red-500 text-xs mt-1">{errors.images.message}</p>
					)}
				</div>
			</form>

			<div>
				<button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					disabled={isSubmitting}
					className="w-full p-2 bg-[#0f172a] text-white rounded hover:bg-[#1e293b]"
				>
					{isSubmitting
						? "در حال ذخیره..."
						: product?._id
							? "ویرایش محصول"
							: "افزودن محصول"}
				</button>
			</div>
		</div>
	);
}
