import React, { useState } from "react";


export default function Table(props) {
  const [type, setType] = useState('');
  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');



  const handleDeleteOnClick = (e) => {
       
  };
  const handleOnDateChange = () => {
    setDate(new Date(2023/2/13));
  };

  const handleOnChange = (e) => {
    setType(type,e.target.value);
    setItem(item,e.target.value);
    setAmount(amount,e.target.value);
  };

  return (
    <div className= "table">
      <table>
        <thead className="table table-striped">
          <tr>
            <th className="odd" 
            onChange={handleOnChange} 
            value={type}>
              Type
            </th>
            <th className="even" 
            onClick={handleOnDateChange}
            value={date} >
              Date
            </th>
            <th className="odd" 
            onChange={handleOnChange} 
            value={item}>
              Item
            </th>
            <th className="even" 
            onChange={handleOnChange}
            value={amount}>
              Amount
            </th>
            <button  
            onClick={handleDeleteOnClick}>
              <i className="fa-thin fa-trash-can">X</i>
              </button>
             
          </tr>
        </thead>
      </table>
    </div>
  );
}
