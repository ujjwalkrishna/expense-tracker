import React from 'react'

export const Balance = (props) => {
    return (
        <>
            <h4>Your Balance</h4>
            <h1>₹{props.sum}</h1>
        </>
    )
}

export default Balance;