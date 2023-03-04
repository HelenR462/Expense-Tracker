import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

export default function App() {
  const [totalExpense, setTotalExpense] = useState(0);
  const [expense, setExpense] = useState([
    {
      id: 1,
      type: "Cash",
      date: "2023/2/20",
      item: "Food",
      amount: "123.00",
    },

    {
      id: 2,
      type: "Credit Card",
      date: "2023/2/14",
      item: "Hand Bag",
      amount: "170.00",
    },
  ]);

  const handleOnChange = (e) => {
    setExpense(expense, e.target.value);
  };

  const handleOnClick = (e) => {
    setTotalExpense(expense + totalExpense);
  };

  return (
    <div>
      <Header
        totalExpense={totalExpense}
        onChange={handleOnChange}
        onClick={handleOnClick}
      />
      <MainButton
        amount={expense.amount}
        onChange={handleOnChange}
        onClick={handleOnClick}
      />
      <Table />
      <TableBody
        type={expense.type}
        date={expense.date}
        item={expense.item}
        amount={expense.amount}
      />
     
    </div>
  );
}

