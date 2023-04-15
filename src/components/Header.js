import React, { useState } from "react";

export default function Header(props) {
  //  console.log("props", props)
  const [amount, setAmount] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // const total = amount.reduce(amount, total) =  total +(amount, 0)

    //   setAmount(total)
    // }

  
    return (
      <header className="header-section">
        <h1>Expense Tracker</h1>
        <h3
          type="number"
          value={props.amount}
          // onChange={handleAmountOnChange}
          onSubmit={handleOnSubmit}
          //  onClick={handleOnClick}
        >
          Total: ${amount}
        </h3>
      </header>
    );
  };
}
