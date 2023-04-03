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

    {
      id: 2,
      type: "cheque",
      date: "2023/2/20",
      item: "bill",
      amount: "193.00",
    },
  ]);

 
  const handleOnChange = (e) => {
    setExpense(expense,e.target.value);


  const expenseItems = [];
  for (let i = 0; i < expense.length; i++) {
    const expenseObject = expense[i];
    // add table body to expenseItems array
    

    expenseItems.push( 
   
          
       <TableBody
          key={expenseObject.id}
         type={expenseObject.type}
        date ={expenseObject.date}
        item ={expenseObject.item}
         amount={expenseObject.amount}
         />
     )

    }
       

   
 
    };
  
    
    return (
      <div>
        <Header
          
        />
        <MainButton

         onChange={handleOnChange}
        />
        <Table />
        <TableBody 
        
       
        />
        {/* {expenseItems} */}
      
      </div>
    );
  }
