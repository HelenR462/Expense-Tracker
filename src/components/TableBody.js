import React, { useState } from "react";

export default function TableBody(props) {
  //  console.log("props", props);
  
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    setData(data, e.target.value);
  };

  // const handleOnDelete = (id) => {
   
  //     deleteExpense(id);
  //     setData('')
  // };

  const expenseItems = [];
  for (let i = 0; i < props.expenses.length; i++) {
    const expenseObject = props.expenses[i];
    // add table body to expenseItems array

    expenseItems.push(
      <tr key={expenseItems}>
        <td>{expenseObject.type}</td>
        <td>{expenseObject.date}</td>
        <td>{expenseObject.item}</td>
        <td>{expenseObject.amount}</td>
        <td>
          <button type="delete" 
          // onClick={handleOnDelete}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
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
      <tbody>{expenseItems}</tbody>
    </table>
  );
}
