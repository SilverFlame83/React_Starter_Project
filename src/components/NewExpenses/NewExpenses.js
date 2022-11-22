import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const expenseChangeHandler = (expenseData) => {
    const newData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onExpenseChange(newData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseChange={expenseChangeHandler} />
    </div>
  );
};

export default NewExpenses;
