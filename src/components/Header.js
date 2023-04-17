import React from "react";

export default function Header(props) {
  return (
    <header className="header-section">
      <h1>Expense Tracker</h1>
      <h3 type="number" value={props.amount}>
        Total: ${props.amount}
      </h3>
    </header>
  );
}
