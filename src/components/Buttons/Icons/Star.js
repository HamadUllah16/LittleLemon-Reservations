import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Star() {
  return (
    <div className='d-flex star'>
      <FontAwesomeIcon icon={faStar} style={{color: "#495E57",}} />
      <FontAwesomeIcon icon={faStar} style={{color: "#495E57",}} />
      <FontAwesomeIcon icon={faStar} style={{color: "#495E57",}} />
      <FontAwesomeIcon icon={faStar} style={{color: "#495E57",}} />
      <FontAwesomeIcon icon={faStar} style={{color: "#495E57",}} />
    </div>
  )
}

export default Star
