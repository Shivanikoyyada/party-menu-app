import React from 'react'

const Tabs = ({categories,active,onChange,counts}) => {
  return (
    <div className="tabs">
      {categories.map((c) => (
        <button key={c} onClick={() => onChange(c)} className={`tab ${active === c ? "active" : ""}`} >
          {c} <span className="badge">{counts[c] || 0}</span>
        </button>
      ))}
    </div>
  )
}

export default Tabs
