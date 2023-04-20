import React, { useState /*useEffect */ } from "react";

export default function MainButton({ addNewExpense,   /*expenseItems */}) {
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [store, setStore] = useState("");

  //   const [inputValue, setInputValue] = useState(true);

  //   useEffect(() =>{
  //    const expenseData = window.localStorage.getItem('STORE_EXPENSE_VALUE');
  //  console.log('expenseData', expenseData )
  //    if(expenseData !== null) setInputValue(JSON.parse(expenseData))
  //    }, [])

  // useEffect(() =>{
  //  window.localStorage.setItem('STORE_EXPENSE_VALUE', JSON.stringify(inputValue))
  // }, [inputValue])

  const handleTypeOnChange = (e) => {
    setType(e.target.value);
  };

  const handleDateOnChange = (e) => {
    setDate(e.target.value);
  };

  const handleItemOnChange = (e) => {
    setItem(e.target.value);
  };

  const handleAmountOnChange = (e) => {
    setAmount(e.target.value);
  };

  // const handleOnClick = (e) => {
  //   setInputValue(false);
  // };

  const handleStoreOnChange = (e) => {
    setStore(e.target.value);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    addNewExpense(store, type, date, item, amount);
    e.target.reset();
  }

  return (
    <div>
      {/* {inputValue &&(
   <tbody className="chart">{expenseItems}</tbody> 
  )} */}

      <form className="form-box" onSubmit={handleOnSubmit}>
        <label className=" top-item top-row">
          <span> Store:</span>
          <input
            className="form-control"
            onChange={handleStoreOnChange}
            name="name"
            placeholder="Store Name"
            aria-label="store"
          />
        </label>

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
        <label className=" date">
          <span>Date:</span>
          <input onChange={handleDateOnChange} type="date" />
        </label>

        {/*Amount */}
        <label className="amount">
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
          <button
            className="btn btn-primary btn-lg"
            type="Submit"
            // onClick={handleOnClick}
            onSubmit={handleOnSubmit}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
