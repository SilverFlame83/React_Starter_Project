import { useState } from "react";

import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [editExpense, setEditExpense] = useState(false);

  const expenseChangeHandler = (expenseData) => {
    const newData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onExpenseChange(newData)
    setEditExpense(false)
  };
  const expenseHandler = ()=>{
    setEditExpense(true);
  }
  
  const cancelHandler=()=>{
    setEditExpense(false);
  }

  return (
    <div className="new-expense">
      {!editExpense && <button onClick={expenseHandler}>Add Expense</button>}
      {editExpense && <ExpenseForm onCancel={cancelHandler} onExpenseChange={expenseChangeHandler} />}
      
    </div>
  );
};

export default NewExpenses;
