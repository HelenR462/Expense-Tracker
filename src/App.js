import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";
import TableBody from "./components/TableBody";

export default function App() {
  const [expense, setExpense] = useState([
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
])


const expenseItems = [];
for (let i = 0; i < expense.length; i++) {
    const expenseObject = expense[i];
  // add table body to expenseItems array

  expenseItems.push(
  //   <li>
  // {expenseObject}: {expenseItems[expenseObject]}
  // </li>
  
      <TableBody
          id={expenseObject.id}
           item= {expenseObject.item}
          type={expenseObject.type}
          date={expenseObject.date}
          amount={expenseObject.amount}
      />
  
   )
}

const handleOnSubmit=()=>{
  setExpense(expense => [...expense,expenseItems] );
}




     return (
    <div>
      <Header amount={setExpense.amount}/>
      <MainButton />
      <Table />
      <TableBody key={expense.id}
       onSubmit={handleOnSubmit}
      setExpense={setExpense}
    
          /> 
   
      {expenseItems}  
    </div>
  );
  }
  