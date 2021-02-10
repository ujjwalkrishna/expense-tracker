import React, { useState } from 'react'

export const AddTransaction = (props) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  
    function handleSubmit(e){
        e.preventDefault();
        const newTransaction = {
            amount : amount,
            text: text
        }
        // axios.post('http://localhost:5000/api/v1/transactions', newTransaction).then(response =>{
        //     console.log(response);
        // }).catch(err =>{
        //     console.log(err);
        // })
        props.addtransaction(newTransaction);
        setText('');
        setAmount(0);

    }
    return ( 
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{ setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>{ setAmount(e.target.value) }} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
