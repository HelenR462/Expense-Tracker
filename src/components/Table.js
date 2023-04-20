import React from "react";

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr className="row">
            <th className="col-2">Store</th>
            <th className="col-2">Type</th>
            <th className="col-3">Date</th>
            <th className="col-2">Item</th>
            <th className="col">Amount</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
