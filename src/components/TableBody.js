import React, { useState } from "react";

export default function TableBody(props) {
  const [data, setData] = useState("");

  const handleOnChange = (e) => {
    setData(data, e.target.value);
  };

  // const handleOnClick = (e) => {};

  return (
    // <tbody
    <table
      className="table table-striped"
      value={props.data}
      onChange={handleOnChange}
    >
      <tbody>
        <tr>
          <td>{props.type}</td>
          <td>{props.date}</td>
          <td>{props.item}</td>
          <td>{props.amount}</td>
        </tr>
      </tbody>

      {/* <div> 
       <button type="delete" onClick={handleOnClick}>
        <i className="fa fa-trash" aria-hidden="true"></i>
         </button>  
       </div>  */}
      {/* </tbody> */}
    </table>
  );
}
