"use client";

export default function BtnProductCard() {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
			}}
			className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm text-white py-3 text-sm font-bold
					translate-y-full transition-transform duration-300
					group-hover:translate-y-0
					hover:bg-[#C9A227]"
		>
			افزودن به سبد خرید
		</button>
	);
}
