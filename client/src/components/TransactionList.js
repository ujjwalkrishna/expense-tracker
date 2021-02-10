import React from 'react'
import Transaction from './Transaction';

export const TransactionList = (props) => {
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {props.listItem.map((transaction, index) => {
                    return <Transaction key={index} id={transaction._id} onDelete={props.onDelete} transaction={transaction} />
                })}
            </ul>
        </>
    )

}


