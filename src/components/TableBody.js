import React from "react";

function TableBody({expense}) {
  return (
    <TableBody>
      <tbody>
        <tr>
          <td>{expense.type}</td>
          <td>{expense.date}</td>
          <td>{expense.item}</td>
          <td>{expense.amount}</td>
        </tr>
      </tbody>
    </TableBody>
  );
}

export default TableBody;
