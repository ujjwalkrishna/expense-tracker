import React from 'react'

export const Transaction = (props) => {

        const sign = Number(props.transaction.amount) > 0 ? '+':'-';
        const signValue = Number(props.transaction.amount) > 0 ? 'plus':'minus';
   
        function handleDelete(){
              props.onDelete(props.id) ;
        }
    return (
            <li className={signValue}>
                    {props.transaction.text} <span>{sign}₹{Math.abs(props.transaction.amount)}</span><button onClick={handleDelete} className="delete-btn">x</button>
            </li>
    )
}

export default Transaction;
