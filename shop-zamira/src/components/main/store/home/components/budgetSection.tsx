"use client";

import charkh from "@/assets/svg/charkh-reng1-white-1536x1536.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { budgetOptions } from "../constants/budgetData";
import { BudgetLinkProps } from "../types/budgetType";

function BudgetSection() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
	const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

	return (
		<section
			ref={containerRef}
			className="relative w-full overflow-hidden bg-cover bg-center"
			style={{ backgroundImage: "url('/images/watch-bg.jpg')" }}
		>
			<div className="absolute inset-0 bg-black/70" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
				<div className="relative lg:hidden min-h-[420px] flex items-center">
					<motion.div
						style={{ rotate, y }}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[420px] h-[420px] opacity-30"
					>
						<Image src={charkh} alt="gear" fill className="object-contain" />
					</motion.div>

					<div className="ml-[140px] flex flex-col gap-6">
						<h2 className="text-white text-xl font-semibold mb-4">
							بودجه مدنظر خود را انتخاب کنید
						</h2>

						<div className="flex flex-col gap-6">
							{budgetOptions.map((item) => (
								<BudgetLinkMobile key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>

				<div className="hidden lg:flex items-center justify-between min-h-[520px]">
					<div className="flex flex-col gap-20">
						{budgetOptions
							.filter((i) => i.side === "left")
							.map((item) => (
								<BudgetLinkDesktop key={item.id} item={item} />
							))}
					</div>

					<div className="absolute left-1/2 top-[80%] -translate-x-1/2 text-center text-white">
						<h2 className="text-4xl font-bold mb-3">بودجه مدنظر خود را</h2>
						<p className="text-3xl font-light opacity-90">انتخاب کنید</p>
					</div>

					<motion.div
						style={{ rotate, y }}
						className="absolute left-1/2 -translate-x-1/2 bottom-[-330px] w-[760px] h-[760px] opacity-40"
					>
						<Image src={charkh} alt="gear" fill className="object-contain" />
					</motion.div>

					<div className="flex flex-col gap-20 items-end">
						{budgetOptions
							.filter((i) => i.side === "right")
							.map((item) => (
								<BudgetLinkDesktop key={item.id} item={item} />
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

const BudgetLinkMobile: React.FC<BudgetLinkProps> = ({ item }) => (
	<Link
		href={item.link}
		className="group flex items-center gap-3 text-white hover:text-amber-500 transition"
	>
		<div className="flex items-center">
			<motion.div
				initial={{ width: 30 }}
				whileHover={{ width: 60 }}
				className="h-[1px] bg-white/50 group-hover:bg-amber-500 transition-all"
			/>
			<div className="w-2 h-2 bg-white rounded-full group-hover:bg-amber-500 animate-pulse" />
		</div>

		<span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
	</Link>
);

const BudgetLinkDesktop: React.FC<BudgetLinkProps> = ({ item }) => (
	<Link
		href={item.link}
		className={`group flex items-center gap-4 text-white hover:text-amber-500 transition ${
			item.side === "right" ? "flex-row-reverse" : ""
		}`}
	>
		<span className="text-lg font-medium whitespace-nowrap">{item.label}</span>

		<div className="flex items-center">
			{item.side === "left" ? (
				<>
					<motion.div
						initial={{ width: 40 }}
						whileHover={{ width: 90 }}
						className="h-[1px] bg-white/50 group-hover:bg-amber-500"
					/>
					<div className="w-2 h-2 bg-white rounded-full group-hover:bg-amber-500 animate-pulse" />
				</>
			) : (
				<>
					<div className="w-2 h-2 bg-white rounded-full group-hover:bg-amber-500 animate-pulse" />
					<motion.div
						initial={{ width: 40 }}
						whileHover={{ width: 90 }}
						className="h-[1px] bg-white/50 group-hover:bg-amber-500"
					/>
				</>
			)}
		</div>
	</Link>
);

export default BudgetSection;
