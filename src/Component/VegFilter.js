import React from 'react'

const VegFilter = ({setVegOn,setNonVegOn,vegOn,nonVegOn}) => {
  return (
    <div className="veg-filters">
      <button onClick={() => setVegOn(!vegOn)}className={`filter-btn ${vegOn ? "active" : ""}`}>Veg</button>
      <button onClick={() => setNonVegOn(!nonVegOn)}className={`filter-btn ${nonVegOn ? "active" : ""}`}> Non-Veg</button>
    </div>
  )
}

export default VegFilter
