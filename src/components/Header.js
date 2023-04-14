import React, { useState } from "react";


export default function Header(props) {

  // console.log("props", props)
  const[amount, setAmount]= useState(0)
  

  // const totalAmount = expenses.map(expenses=>expenses.amount)

  const handleOnSubmit = (e) => {
    // e.preventDefault()
    setAmount(...amount, amount)
    console.log(amount)
   };
  


  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 type="number" value={props.amount} onSubmit={handleOnSubmit}>
        Total: ${amount}
      </h3>
     
    </header>
  );
}
