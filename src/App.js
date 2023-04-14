import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      type: "Cash",
      date: "2023/2/20",
      item: "Food",
      amount: "123.00",
    },

    {
      id: 1,
      type: "Credit Card",
      date: "2023/2/14",
      item: "Hand Bag",
      amount: "170.00",
    },
  ]);

  // const expenseItems = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   const expenseObject = expenses[i];
  //   // add table body to expenseItems array

  //   expenseItems.push(
  //     <TableBody
  //       id={expenseObject.id}
  //       item={expenseObject.item}
  //       type={expenseObject.type}
  //       date={expenseObject.date}
  //       amount={expenseObject.amount}
  //     />
  //   );
  // }

  const addNewExpense = (type, date, item, amount) => {
    const newExpense = {
      
      id: Math.random(),
      type: type,
      date: date.toLocaleString(),
      item: item,
      amount:amount
   };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <Header amount={addNewExpense.amount}/>
      < MainButton addNewExpense={addNewExpense}   />
      <Table />
      <TableBody
         onSubmit={addNewExpense}
      //  onClick={handleOnDelete}
       setExpenses={setExpenses}
        expenses={expenses}

      />

      {/* {expenseItems} */}
    </div>
  );
}
