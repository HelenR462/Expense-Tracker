import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

export default function App() {
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

  return (
    <div>
      <Header amount={expense.amount} onChange={handleOnChange} />
      <MainButton amount={expense.amount} onChange={handleOnChange} />
      <Table />
      <TableBody
        type={expense[0].type}
        date={expense[0].date}
        item={expense[0].item}
        amount={expense[0].amount}
      />
      <TableBody
        type={expense[1].type}
        date={expense[1].date}
        item={expense[1].item}
        amount={expense[1].amount}
      />
    </div>
  );
}
