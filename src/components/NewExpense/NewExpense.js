import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSavedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const handleIsEditing = () => {
    setIsEditing(true);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleIsEditing}>Add new Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={handleSavedExpenseData}
          onCancel={handleStopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
