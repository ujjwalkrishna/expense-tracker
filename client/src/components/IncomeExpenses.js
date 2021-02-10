import React from 'react'

export const IncomeExpenses = (props) => {
    const positiveArr = props.listItem.filter((posItem)=>{
      return posItem.amount >= 0;
    });
    const negativeArr = props.listItem.filter((posItem)=>{
      return posItem.amount < 0;
    });
    var posSum = 0;
    positiveArr.forEach((item)=>{
      posSum+=Number(item.amount);
    })
    var negSum = 0;
    negativeArr.forEach((item)=>{
      negSum+=Number(item.amount);
    })
    // console.log(posSum, negSum)
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+₹{posSum}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-₹{Math.abs(negSum)}</p>
        </div>
      </div>
    )
}
