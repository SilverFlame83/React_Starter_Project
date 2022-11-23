import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const filterHandler = (filterData) => {
    console.log(filterData);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilteredExpense={filterHandler} />
        {props.items.map((expenses) => (
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
