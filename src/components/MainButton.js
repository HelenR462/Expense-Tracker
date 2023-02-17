import React, { useState } from "react";

export default function MainButton(props) {
  // const handleOnClick = (e) => {};

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

  }

  const [type, setType] = useState("");
 
  const handleOnChange = (e) => {
     setType(e.target.value);
    // console.log(e.target.value);
  };

  const [date, setDate] = useState("");
  const handleDateOnChange = () => {
    setDate(date, new Date(2023 / 2 / 7));
  };

  return (
    <div>
      <label className="top-row payment">
        <span>Type:</span>
        <select onChange={handleOnChange} className="type">
          <option >Payment</option>
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
        <input className="form-control"
          onChange={handleOnChange}
          value={props.item}
          type="text"
          placeholder="Description"
          aria-label="item"
        />
      </label>
      {/* Date */}
      <label className=" btm-row">
        <span>Date:</span>
        <input 
        onChange={handleDateOnChange} 
        type="date" 
        value= {date}/>
      </label>

      {/*Amount */}
      <label className="btm-row">
        <span>Amount:</span>
        <input
          onChange={handleOnChange}
          className="form-control"
          value={props.amount}
          type="number"
          min="1.00"
          step="0.050"
          placeholder="$ Price"
          aria-label="Amount"
        />
      </label>

      {/* Button */}
      <div className="btn-container">
        <button className="btn btn-primary btn-lg" type="Submit" onClick={handleOnSubmit}>
          Add Expense
        </button>
      </div>
      
    </div>
  );
}
