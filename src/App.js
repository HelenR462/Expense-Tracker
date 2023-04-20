import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

export default function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (store, type, date, item, amount) => {
    const newExpense = {
      id: Math.random(),
      store: store,
      type: type,
      date: date.toLocaleString(),
      item: item,
      amount: amount,
    };

    setTotalAmount((prev) => prev + Number(amount));

    setExpenses([...expenses, newExpense]);
  };

  const expenseTotal = expenses.reduce((prev, cur) => {
    return prev + cur.amount;
  }, "");

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((addNewExpense) => addNewExpense.id !== id));
  };

  return (
    <div>
      <Header
        addNewExpense={addNewExpense}
        amount={totalAmount}
        expenseTotal={expenseTotal}
      />
      <MainButton addNewExpense={addNewExpense} />
      <Table />
      <TableBody
        addNewExpense={addNewExpense}
        setExpenses={setExpenses}
        expenses={expenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}
