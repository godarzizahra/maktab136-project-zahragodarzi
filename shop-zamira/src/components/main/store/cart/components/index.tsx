import CartContainer from "./cartContainer";
import CartInitializer from "./cartInitializer";

export default function CartComponent() {
	return (
		<div className="mt-10 md:mt-20 container mx-auto px-4 py-6 md:py-10">
			<CartInitializer />
			<CartContainer />
		</div>
	);
}
