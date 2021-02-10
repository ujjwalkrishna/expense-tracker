import React, { useState, useEffect } from "react"
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
const axios = require('axios');

function App() {

  const [arr, setArr] = useState([]);

  function updateArr(){
    axios.get('http://localhost:5000/api/v1/transactions').then(response => {
      setArr(response.data.data)
    }).catch(err => {
      console.log(err);
    })
  }
  useEffect(()=>{
    updateArr();
  }, [])

  function deleteTran(id) {
    axios.delete(`http://localhost:5000/api/v1/transactions/${id}`).then(response => {
      // console.log(response);
      updateArr();
    }).catch(err => {
      console.log(err);
    })
  }

  function addTransaction(item) {
    axios.post('http://localhost:5000/api/v1/transactions', item).then(response => {
      // console.log(response.data.data);
      updateArr();
    }).catch(err => {
      console.log(err);
    })
  }

  var Sum = 0;
  arr.forEach((item) => {
    Sum += Number(item.amount);
  })

  return (
    <div>
      <Header />
      <div className="container">
        <Balance sum={Sum} />
        <IncomeExpenses listItem={arr} />
        <TransactionList listItem={arr} onDelete={deleteTran} />
        <AddTransaction addtransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
