import ProfileWishlist from "@/components/main/store/profile/components/wishlist/profileWishlist";

export default function WishlistPage() {
	return (
		<ProfileWishlist
			items={[
				{
					id: 1,
					title: "ساعت  مدل کلاسیک",
					price: "12,500,000 تومان",
					image: "/images/product-1.jpg",
					href: "/products/1",
					inStock: true,
				},
				{
					id: 2,
					title: "ساعت  زنانه مدل نگین‌دار",
					price: "8,900,000 تومان",
					image: "/images/product-2.jpg",
					href: "/products/2",
					inStock: false,
				},
			]}
		/>
	);
}
