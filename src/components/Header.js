import React, { useState } from "react";

export default function Header() {
  const [amount, setAmount] = useState(0);

  function handleOnChange(e) {
    setAmount(amount + { amount });

    console.log(amount);
  }

  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 onChange={handleOnChange}>Total: $ {amount}</h3>
    </header>
  );
}
