import { brands } from "@/components/main/store/home/constants/brandsData";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./header";

type MobileMenuProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
	const [mobileBrandOpen, setMobileBrandOpen] = useState(false);

	return (
		<>
			{open && (
				<div
					className="absolute top-full left-0 w-full h-screen flex flex-col gap-4 px-6 py-6 md:hidden z-50"
					style={{ backgroundColor: "var(--surface)" }}
				>
					{navLinks.map((item) =>
						item.href !== "/brands" ? (
							<Link
								key={item.href}
								href={item.href}
								className="py-2 border-b"
								style={{
									color: "var(--text-primary)",
									borderColor: "var(--border)",
								}}
								onClick={() => setOpen(false)}
							>
								{item.label}
							</Link>
						) : (
							<div key="brands" className="flex flex-col">
								<button
									type="button"
									className="py-2 border-b text-right"
									style={{
										color: "var(--text-primary)",
										borderColor: "var(--border)",
									}}
									onClick={() => setMobileBrandOpen((prev) => !prev)}
								>
									برندها▾
								</button>

								{mobileBrandOpen && (
									<div className="flex flex-col pr-4">
										{brands.map((brand) => (
											<Link
												key={brand.id}
												href={`/products?brand=${brand.value}&page=1`}
												className="py-2 border-b"
												style={{
													color: "var(--text-primary)",
													borderColor: "var(--border)",
												}}
												onClick={() => {
													setOpen(false);
													setMobileBrandOpen(false);
												}}
											>
												{brand.name}
											</Link>
										))}
									</div>
								)}
							</div>
						),
					)}
				</div>
			)}
		</>
	);
}
