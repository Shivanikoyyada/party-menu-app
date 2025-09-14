import React from 'react'

const SearchBar = ({value,onChange}) => {
  return (
    <div className="search-bar">
      <button className="back-btn">←</button>
      <input className="search-input" placeholder="Search dish for your party......"value={value}onChange={(e) => onChange(e.target.value)}/>
      <button className="search-icon">🔍</button>
    </div>
  )
}

export default SearchBar
