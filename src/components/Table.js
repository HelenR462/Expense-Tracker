import React from "react";
import TableBody from "./TableBody";

export default function Table({type, date,item,amount}) {
  // const [type, setType] = useState("");
  // const [item, setItem] = useState("");
  // const [date, setDate] = useState(new Date());
  // const [amount, setAmount] = useState("");
  
 
  // const handleOnDateChange = (e) => {
  //   setDate(date,2023/2/28);

  // };

  // const handleOnChange = (e) => {
  //   setType(type, e.target.value);
  //   setItem(item, e.target.value);
  //   setAmount(amount, e.target.value);
    
  // };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="odd" //onChange={handleOnChange} 
            
            value={type}
            >
              Type
            </th>
            <th className="even" //onChange={handleOnDateChange} 
            value={date}>
              Date
            </th>
            <th className="odd" //onChange={handleOnChange} 
            value={item}>
              Item
            </th>
            <th className="even" //
            //onChange={handleOnChange}
             value={amount} >   
              Amount
            </th>
          </tr>
        </thead>
      
      </table>

      <TableBody/> 
    </div>
  );
}
