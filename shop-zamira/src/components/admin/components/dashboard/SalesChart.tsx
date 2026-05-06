"use client";

import { SalesItem } from "@/components/admin/types/dashboardType";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

export default function SalesChart({ data }: { data: SalesItem[] }) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
			<h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
				نمودار فروش ماهانه
			</h3>

			<div style={{ width: "100%", height: 265 }}>
				<ResponsiveContainer>
					<AreaChart data={data}>
						<defs>
							<linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
							</linearGradient>
						</defs>

						<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
						<XAxis dataKey="month" tick={{ fill: "var(--text-secondary)" }} />
						<YAxis tick={{ fill: "var(--text-secondary)" }} />

						<Area
							type="monotone"
							dataKey="sales"
							stroke="var(--accent)"
							strokeWidth={2}
							fill="url(#goldGradient)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
