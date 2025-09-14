import React from 'react'

const SummaryBar = ({total,onContinue}) => {
  return (
    <div>
      <div className="summary-bar">
      <div>Total Dish Selected: <strong>{total}</strong></div>
      <button className="continue-btn" onClick={onContinue}>Continue</button>
    </div>
    </div>
  )
}

export default SummaryBar
