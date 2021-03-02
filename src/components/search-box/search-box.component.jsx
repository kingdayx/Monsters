import React from 'react'
import './search-box.styles.css'

export const Search = ({ value, handleChange }) => {
  return (
    <input
      type="search"
      placeholder="search monsters"
      value={value}
      onChange={handleChange}
      className="search"
    />
  )
}
