import React, { useState } from "react";
import TableBody from "./TableBody";

export default function MainButton({setExpense}) {
  const [type, setType] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const handleTypeOnChange = (e) => {
    setType(type, e.target.value);

    console.log(e.target.value);
  };

  const handleDateOnChange = (e) => {
    setDate(date, new Date(2023 / 2 / 7));

    console.log(e.target.value);
  };

  const handleItemOnChange = (e) => {
    setItem(item, e.target.value);

    console.log(e.target.value);
  };

  const handleAmountOnChange = (e) => {
    setAmount(amount, e.target.value);

    console.log(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // setExpense({
    //   type:{type},
    //   date:{date},
    // item: {item},
    //   price:{amount}
    //  } )
    //  setExpense(e.target.value)
    setAmount((previous) => previous + amount);

    console.log("Submitted");
  
  }
    

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label className="top-row payment">
          <span>Type:</span>
          <select
            onChange={handleTypeOnChange}
            className="type"
             value={setExpense}
          >
            <option>Payment</option>
            <option value="cash">Cash</option>
            <option value="debit">Debit</option>
            <option value="credit card">Credit Card</option>
            <option value="cheque">Cheque</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Item */}
        <label className=" top-item top-row">
          <span> Item:</span>
          <input
            className="form-control"
            onChange={handleItemOnChange}
            name="name"
             value={setExpense}
            placeholder="Description"
            aria-label="item"
          />
        </label>
        {/* Date */}
        <label className=" btm-row">
          <span>Date:</span>
          <input
            //  onSelect={handleOnChange}
            onChange={handleDateOnChange}
            type="date"
            value={setExpense}
          />
        </label>

        {/*Amount */}
        <label className="btm-row">
          <span>Amount:</span>
          <input
            onChange={handleAmountOnChange}
            className="form-control"
            name="price"
            value={setExpense}
            type="number"
            min="1.00"
            step="0.050"
            placeholder="$ Price"
            aria-label="Amount"
          />
        </label>
        {/* Button */}
        <div className="btn-container">
          <button
            className="btn btn-primary btn-lg"
            type="Submit"
            // onClick={handleOnClick}
          >
            Add Expense
          </button>
        </div>
      </form>
 
    <TableBody
         />
      {/* <tr> */}
    
      {/* </tr> */}
    </div>
  );
}
