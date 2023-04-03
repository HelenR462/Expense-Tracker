import React, { useState } from "react";

export default function Header(props) {
  
  const [amount, setAmount] = useState(0);
  //  const [totalAmount, setTotalAmount] =useState() 
  
 
  const handleAmountOnChange = (e) => {
       setAmount(amount, amount + e.target.value);
    console.log(e.target.value)
    };

    return (
    <header className="header-section"> 
      <h1>Expense Tracker</h1>
      <h3
       type="number" 
      value={props.amount} 
        onChange={handleAmountOnChange}
      >
        Total: ${amount}
      </h3>
    </header>
  );
}
