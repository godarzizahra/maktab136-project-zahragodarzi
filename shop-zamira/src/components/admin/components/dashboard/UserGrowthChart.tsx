"use client";

import { UsersItem } from "@/components/admin/types/dashboardType";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from "recharts";

export default function UserGrowthChart({ data }: { data: UsersItem[] }) {
	return (
		<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
			<h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
				نمودار رشد کاربران
			</h3>

			<div style={{ width: "100%", height: 265 }}>
				<ResponsiveContainer>
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
						<XAxis dataKey="month" tick={{ fill: "var(--text-secondary)" }} />
						<YAxis tick={{ fill: "var(--text-secondary)" }} />

						<Line
							type="monotone"
							dataKey="users"
							stroke="var(--accent)"
							strokeWidth={2}
							dot={{ r: 3, fill: "var(--accent)" }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
