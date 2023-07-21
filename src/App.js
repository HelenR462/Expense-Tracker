import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import TableBody from "./components/TableBody";

export default function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [expense, setExpense] = useState({
    id: Math.random(),
    store: "",
    type: "",
    date: "",
    item: "",
    amount: "",
  });

 


  const [expenses, setExpenses] = useState([]);

  const addNewExpense = () => {
    if(Object.values(expense).includes('')) return;
    setTotalAmount((prev) => prev + Number(expense.amount));
    setExpenses([...expenses, expense]);
    setExpense({
      id: Math.random(),
      store: "",
      type: "",
      date: "",
      item: "",
      amount: "",
    });
  };

 
  const deleteExpense = (id,amount) => {
    setTotalAmount((prev) => prev - Number(amount));
    setExpenses(expenses.filter((addNewExpense) => addNewExpense.id !== id));
  };

  return (
    <div>
      <Header totalAmount={totalAmount} />
      <MainButton
        addNewExpense={addNewExpense}
        expense={expense}
        setExpense={setExpense}
      />

      <TableBody
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}
