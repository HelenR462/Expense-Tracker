import React from "react";

export default function TableBody({ expenses, deleteExpense }) {
  const expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expenseObject = expenses[i];

    expenseItems.push(
      <tr key={expenseItems}>
        <td>{expenseObject.store}</td>
        <td>{expenseObject.type}</td>
        <td>{expenseObject.date}</td>
        <td>{expenseObject.item}</td>
        <td className='price'>
         {(() => {
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
            }).format(expenseObject.amount);

            const [dollars, cents] = formatted.split(".");
            return (
              <>
                <span className='dollars'>{dollars}.</span>
                <span className='cents'>{cents}</span>
              </>
            );
          })()}
        </td>
        <td>
          <button
            className='trash'
            type='delete'
            onClick={(e) => {
              deleteExpense(expenseObject.id, expenseObject.amount);
            }}
          >
            <i className='fa fa-trash' aria-hidden='false'></i>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className='tableContainer'>
      <table className='tableContent'>
        <thead className='tableHead'>
          <tr className='tableRow'>
            <th className='tableCell'>Store</th>
            <th className='tableCell'>Type</th>
            <th className='tableCell'>Date</th>
            <th className='tableCell'>Item</th>
            <th className='tableCell'>Amount</th>
          </tr>
        </thead>
        <tbody className='chart'>{expenseItems}</tbody>
      </table>
    </div>
  );
}
