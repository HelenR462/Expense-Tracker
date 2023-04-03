import React, { useState } from "react";


export default function TableBody(props) {
  const [expense, setExpense] = useState("");

  const handleOnChange = (e) => {
    setExpense(expense, e.target.value);

   
  };

//   const handleOnClick = (e) => {
//  if(click === true){
//   return true
//  }else{
//   false
//  }

  // };

  return (
    <tbody
      // {/* <div> */}
      // {/* <tbody */}
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
      {/* </tbody> */}

     

      {/* <div> */}
      {/* <button type="delete" onClick={handleOnClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
         </button>  */}
      {/* </div>  */}
    </tbody>
  );
}
