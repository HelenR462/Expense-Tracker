import React, { useState } from "react";

function TableBody(props) {
  const [expense, setExpense] = useState("");

  const handleOnChange = (e) => {
    setExpense(expense, e.target.value);
  };

  // const handleOnClick = (e) => {

  // }
  //

  return (
    <div>
      <tbody
        className="table table-striped"
        value={expense}
        onChange={handleOnChange}
      >
        <tr>
          <td>{props.type}</td>
          <td>{props.date}</td>
          <td>{props.item}</td>
          <td>{props.amount}</td>
        </tr>
      </tbody>

      {/* <button type="delete" onClick={handleOnClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button> 

     */}
    </div>
  );
}

export default TableBody;
