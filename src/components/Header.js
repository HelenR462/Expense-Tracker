import React, { useState } from "react";

export default function Header() {
  const [amount, setAmount] = useState(0);

  const handleOnSubmit = (e) => {
    setAmount((previous) => previous + e.target.value);
  };

  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 type="number" value={amount} onSubmit={handleOnSubmit}>
        Total: ${amount}
      </h3>
    </header>
  );
}
