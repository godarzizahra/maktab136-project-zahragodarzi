import CartList from "./cartList";
import CartSummary from "./cartSummary";
import CouponBox from "./couponBox";

export default function CartContainer() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
			<div className="lg:col-span-8 order-2 lg:order-1">
				<CartList />
				<CouponBox />
			</div>

			<div className="lg:col-span-4 order-1 lg:order-2">
				<CartSummary />
			</div>
		</div>
	);
}
