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
import { Product } from "../../types/dashboardProductsType";

const BRAND_LIST = [
	"Lacoste",
	"Seiko",
	"Citizen",
	"Casio",
	"Polo",
	"Versace",
	"Tissot",
	"Jaguar",
	"Obaku",
	"Esprit",
];

const CATEGORY_LIST = ["اسپرت", "رسمی", "روزمره", "ورزشی"];

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
		<form
			onSubmit={handleSubmit(onSubmit, (err) => {
				console.log("validation errors:", err);
			})}
			className="space-y-6 p-2"
		>
			<div className="grid grid-cols-2 gap-5">
				{/* نام محصول */}
				<div>
					<input
						placeholder="نام محصول"
						{...register("name")}
						className="w-full border p-2 rounded text-black"
					/>
					{errors.name && (
						<p className="text-red-500 text-sm">{errors.name.message}</p>
					)}
				</div>

				{/* برند */}
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
						<p className="text-red-500 text-sm">{errors.brand.message}</p>
					)}
				</div>

				{/* قیمت */}
				<div>
					<input
						type="number"
						placeholder="قیمت محصول"
						{...register("price", { valueAsNumber: true })}
						className="w-full border p-2 rounded text-black"
					/>
					{errors.price && (
						<p className="text-red-500 text-sm">{errors.price.message}</p>
					)}
				</div>

				{/* موجودی */}
				<div>
					<input
						type="number"
						placeholder="تعداد موجودی"
						{...register("stock", { valueAsNumber: true })}
						className="w-full border p-2 rounded text-black"
					/>
					{errors.stock && (
						<p className="text-red-500 text-sm">{errors.stock.message}</p>
					)}
				</div>
			</div>

			{/* دسته‌بندی */}
			<div>
				<p className="font-medium mb-1">دسته بندی محصول</p>
				<div className="flex flex-wrap gap-4">
					{CATEGORY_LIST.map((cat) => (
						<label key={cat} className="flex items-center gap-2">
							<input type="checkbox" value={cat} {...register("category")} />
							{cat}
						</label>
					))}
				</div>
				{errors.category && (
					<p className="text-red-500 text-sm">{errors.category.message}</p>
				)}
			</div>

			{/* توضیحات */}
			<div>
				<RichEditor
					value={description}
					onChange={(value) =>
						setValue("description", value, { shouldValidate: true })
					}
				/>
				{errors.description && (
					<p className="text-red-500 text-sm">{errors.description.message}</p>
				)}
			</div>

			{/* تصاویر */}
			<div>
				<p className="font-medium mb-1">تصویر محصول</p>
				<ImageUpload
					initialImages={product?.images}
					onChange={(urls) =>
						setValue("images", urls, { shouldValidate: true })
					}
				/>
				{errors.images && (
					<p className="text-red-500 text-sm">{errors.images.message}</p>
				)}
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-blue-600 text-white w-full py-3 rounded mt-4"
			>
				{isSubmitting
					? "در حال ذخیره..."
					: product?._id
						? "ویرایش محصول"
						: "افزودن محصول"}
			</button>
		</form>
	);
}
