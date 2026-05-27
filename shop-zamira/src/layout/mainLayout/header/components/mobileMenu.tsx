import { brands } from "@/components/main/store/home/constants/brandsData";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./header";

export default function MobileMenu() {
	const [open, setOpen] = useState(false);
	const [mobileBrandOpen, setMobileBrandOpen] = useState(false);
	return (
		<>
			{open && (
				<div
					className=" absolute top-full left-0 w-full flex flex-col gap-4 px-6 py-6 md:hidden"
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
									className="py-2 border-b text-right"
									style={{
										color: "var(--text-primary)",
										borderColor: "var(--border)",
									}}
									onClick={() => setMobileBrandOpen(!mobileBrandOpen)}
								>
									برندها
								</button>

								{mobileBrandOpen && (
									<div className="flex flex-col pr-4">
										{brands.map((brand) => (
											<Link
												key={brand.id}
												href={"/"}
												className="py-2 border-b"
												style={{
													color: "var(--text-primary)",
													borderColor: "var(--border)",
												}}
												onClick={() => setOpen(false)}
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
