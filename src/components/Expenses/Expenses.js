import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";
import { useState } from "react";

const Expenses = props => {
	const [filterYear, setFilterYear] = useState("2020");

	const filterHandler = selectedYear => {
		setFilterYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(
		expense => expense.date.getFullYear().toString() === filterYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filterYear} onChangeFilter={filterHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
