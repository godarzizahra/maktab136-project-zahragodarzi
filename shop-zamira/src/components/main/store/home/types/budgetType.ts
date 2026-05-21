export type Side = "right" | "left";

export interface BudgetItem {
	id: number;
	label: string;
	link: string;
	side: Side;
}

export interface BudgetLinkProps {
	item: BudgetItem;
}
