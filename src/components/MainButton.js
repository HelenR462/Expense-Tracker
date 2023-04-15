import React, { useState } from "react";

export default function MainButton({addNewExpense,}) {
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleTypeOnChange = (e) => {
    setType(e.target.value);

    console.log(e.target.value);
  };

  const handleDateOnChange = (e) => {
    setDate(e.target.value);

    console.log(e.target.value);
  };

  const handleItemOnChange = (e) => {
    setItem(e.target.value);

    console.log(e.target.value);
  };

  const handleAmountOnChange = (e) => {
    setAmount( e.target.value);

    // console.log(e.target.value);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    // console.log(amount)
    addNewExpense(type, date, item, amount);

   
    //  window.location.reload(false)
  }
  //  addNewExpense =(e)=> {
  //      setExpenses(e.target.value)
  //     };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label className="top-row payment">
          <span>Type:</span>
          <select onChange={handleTypeOnChange} className="type">
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
            placeholder="Description"
            aria-label="item"
          />
        </label>
        {/* Date */}
        <label className=" btm-row">
          <span>Date:</span>
          <input onChange={handleDateOnChange} type="date" />
        </label>

        {/*Amount */}
        <label className="btm-row">
          <span>Amount:</span>
          <input
            onChange={handleAmountOnChange}
            className="form-control"
            name="price"
            type="currency"
            min="1.00"
            step="0.00"
            placeholder="$ Price"
            aria-label="Amount"
          />
        </label>

        {/* Button */}
        <div className="btn-container">
          <button className="btn btn-primary btn-lg" type="Submit" onSubmit={handleOnSubmit}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
