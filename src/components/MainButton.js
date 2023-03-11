import React, { useState } from "react";

export default function MainButton(props) {
  const [type, setType] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const handleTypeOnChange = (e) => {
    setType(type, e.target.value);
  };

  const handleDateOnChange = (e) => {
    setDate(date, new Date(2023 / 2 / 7));
  };

  const handleItemOnChange = (e) => {
    setItem(item, e.target.value);
  };

  const handleAmountOnChange = (e) => {
    setAmount(amount, e.target.value);

    //  console.log(e);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label className="top-row payment">
          <span>Type:</span>
          <select
            onChange={handleTypeOnChange}
            className="type"
            value={props.type}
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
            onSelect={handleDateOnChange}
            // onChange={handleDateOnChange}
            type="date"
            value={props.date}
          />
        </label>

        {/*Amount */}
        <label className="btm-row">
          <span>Amount:</span>
          <input
            onChange={handleAmountOnChange}
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
          <button
            className="btn btn-primary btn-lg"
            type="Submit"
            onClick={handleOnSubmit}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
