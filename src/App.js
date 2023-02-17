import React,{useState} from "react";
import "./App.css";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Table from "./components/Table";

export default function App(props) {
  const Purchase =[
    {
      type: "Credit Card",
      item: "Scarf",
      date: "2023/2/10",
      amount: "25",
    },
  ];

  const [purchase,setPurchase] =useState()

  const handleTableOnChange = (e) => {
     setPurchase(purchase)
  };

  return (
    <div>
      <Header value={props.amount} onChange={handleTableOnChange}/>
      <MainButton onChange={handleTableOnChange}/>
      <Table  onChange={handleTableOnChange}/>
    </div>
  );
}

