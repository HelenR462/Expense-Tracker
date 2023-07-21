import React from "react";

export default function Header({totalAmount}) {
  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 type="number" 
          value={totalAmount}>
        Total: ${parseFloat(totalAmount).toFixed(2)}
      </h3>
    </header>
  );
}
