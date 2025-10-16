import React from "react";

export default function MainButton({ addNewExpense, expense, setExpense }) {
  const handleOnChange = (e) => {
    e.preventDefault();
    setExpense({
      ...expense,
      [e.target.id]: e.target.value,
    });
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    addNewExpense();

  }


  return (
    <div>
      <form className="form-box" onSubmit={handleOnSubmit}>
        <label className=" top-item top-row">
          <span> Store:</span>
          <input
            className="form-control"
            onChange={handleOnChange}
            id="store"
            name="name"
            placeholder="Store Name"
            aria-label="store"
            value={expense.store}
            required
          />
        </label>

        <label className="top-row payment">
          <span>Type:</span>
          <select
            onChange={handleOnChange}
            id="type"
            className="type"
            value={expense.type}
          >
            <option defaultValue="payment">Payment</option>
            <option value="cash">Cash</option>
            <option value="debit">Debit</option>
            <option value="credit card">Credit Card</option>
            <option value="cheque">Cheque</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className=" top-item top-row">
          <span> Item:</span>
          <input
            className="form-control"
            onChange={handleOnChange}
            id="item"
            name="name"
            placeholder="Description"
            aria-label="item"
            value={expense.item}
            required
          />
        </label>

        <label className=" date">
          <span>Date:</span>
          <input
            onChange={handleOnChange}
            sortby="ascending"
            id="date"
            type="date"
            value={expense.date}
            required
          />
        </label>

        <label className="amount">
          <span>Amount:</span>
          <input
            onChange={handleOnChange}
            id="amount"
            className="form-control"
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            placeholder="$ Price"
            aria-label="Amount"
            value={expense.amount}
            required
          />
        </label>

        <div className="btn-container">
          <button
            className="btn btn-primary btn-lg"
            type="Submit"
            onSubmit={handleOnSubmit}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}
