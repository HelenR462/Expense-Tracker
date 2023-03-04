import React from "react";

export default function Header({ totalExpense }) {
  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 type="number">Total: $ {totalExpense}</h3>
    </header>
  );
}
