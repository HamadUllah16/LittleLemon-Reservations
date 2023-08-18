import React from 'react'
import { Link } from 'react-router-dom'

function MainButton({buttonName, type, color, textColor, link}) {
  return (
    <>
    <Link to={link}>
      <button type={type} className={`mainButton ${color} highlightText ${textColor} shadow`}>{buttonName} </button>
    </Link>
    </>
  )
}

export default MainButton
