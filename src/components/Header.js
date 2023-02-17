import React, { useState } from "react";
import MainButton from "./MainButton";

export default function Header() {
  const [total, setTotal] = useState(0);

  const handleOnClick = (e) => {
    setTotal(total, e.target.value);
  };

  return (
    <div className="header-section">
      <h1>Expense Tracker</h1>
      <h3 onClick={handleOnClick}>Total $:{total}</h3>
    </div>
  );
}
