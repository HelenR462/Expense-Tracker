import React from "react";


export default function Table(props) {
  // const [type, setType] = useState("");
  // const [item, setItem] = useState("");
  // const [date, setDate] = useState(new Date());
  // const [amount, setAmount] = useState("");

  // const handleOnDateChange = (e) => {
  //   setDate(date, 2023 / 2 / 28);
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
            <th
              className="odd"
              //  onChange={handleOnChange}
              value={props.type}
            >
              Type
            </th>
            <th
              className="even"
              // onChange={handleOnDateChange}
              value={props.date}
            >
              Date
            </th>
            <th
              className="odd"
              // onChange={handleOnChange}
              value={props.item}
            >
              Item
            </th>
            <th
              className="even"
              // onChange={handleOnChange}
              value={props.amount}
            >
              Amount
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
