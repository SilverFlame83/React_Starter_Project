import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2020");

  const filterHandler = (filterData) => {
    setFilterDate(filterData);
  };

  const filteredExpense = props.items.filter(
    (el) => el.date.getFullYear().toString() === filterDate
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilteredExpense={filterHandler} />
        {filteredExpense.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
