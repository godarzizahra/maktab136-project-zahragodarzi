"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	ProductFormData,
	productSchema,
} from "../../schema/modalProductSchema";
import RichEditor from "./richEditor";
import ImageUpload from "./imageUpload";

type Props = {
	product?: Partial<ProductFormData>;
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

		defaultValues: {
			name: product?.name || "",
			brand: product?.brand || "",
			price: product?.price || 0,
			stock: product?.stock || 0,
			category: product?.category || "",
			description: product?.description || "",
		},
	});

	const description = watch("description");

	const onSubmit = async (data: ProductFormData) => {
		try {
			await fetch("/api/products", {
				method: product ? "PUT" : "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			onClose();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			{/* name */}

			<div>
				<input
					placeholder="نام محصول"
					{...register("name")}
					className="w-full border p-2 rounded"
				/>
				{errors.name && (
					<p className="text-red-500 text-sm">{errors.name.message}</p>
				)}
			</div>

			{/* brand */}

			<div>
				<input
					placeholder="برند"
					{...register("brand")}
					className="w-full border p-2 rounded"
				/>
				{errors.brand && (
					<p className="text-red-500 text-sm">{errors.brand.message}</p>
				)}
			</div>

			{/* price */}

			<div>
				<input
					type="number"
					placeholder="قیمت"
					{...register("price", {
						valueAsNumber: true,
					})}
					className="w-full border p-2 rounded"
				/>
				{errors.price && (
					<p className="text-red-500 text-sm">{errors.price.message}</p>
				)}
			</div>

			{/* stock */}

			<div>
				<input
					type="number"
					placeholder="موجودی"
					{...register("stock", {
						valueAsNumber: true,
					})}
					className="w-full border p-2 rounded"
				/>
				{errors.stock && (
					<p className="text-red-500 text-sm">{errors.stock.message}</p>
				)}
			</div>

			{/* category */}

			<div>
				<input
					placeholder="دسته بندی"
					{...register("category")}
					className="w-full border p-2 rounded"
				/>
				{errors.category && (
					<p className="text-red-500 text-sm">{errors.category.message}</p>
				)}
			</div>

			{/* description */}

			<div>
				<RichEditor
					value={description}
					onChange={(value) =>
						setValue("description", value, {
							shouldValidate: true,
						})
					}
				/>
				{errors.description && (
					<p className="text-red-500 text-sm">{errors.description.message}</p>
				)}
			</div>

			{/* image */}

			<ImageUpload onChange={(url) => console.log(url)} />

			{/* submit */}

			<button
				type="submit"
				disabled={isSubmitting}
				className="bg-black text-white px-4 py-2 rounded"
			>
				{isSubmitting ? "در حال ذخیره..." : "ذخیره محصول"}
			</button>
		</form>
	);
}
