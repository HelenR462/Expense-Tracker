import React, { useState } from "react";

export default function TableBody(props) {
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    setData(data, e.target.value);
  };

  const expenseItems = [];
  for (let i = 0; i < props.expenses.length; i++) {
    const expenseObject = props.expenses[i];

    expenseItems.push(
      <tr key={expenseItems}>
        <td>{expenseObject.store}</td>
        <td>{expenseObject.type}</td>
        <td>{expenseObject.date}</td>
        <td>{expenseObject.item}</td>
        <td>{expenseObject.amount}</td>
        <td>
          <button
            className="trash"
            type="delete"
            onClick={(e) => {
              props.deleteExpense(expenseObject.id);
            }}
          >
            <i className="fa fa-trash" aria-hidden="false"></i>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <table
      className="table table-striped"
      value={data}
      onChange={handleOnChange}
    >
      <tbody className="chart">{expenseItems}</tbody>
    </table>
  );
}
