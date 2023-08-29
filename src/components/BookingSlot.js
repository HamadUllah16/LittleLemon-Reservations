import React from 'react'

function BookingSlot({name, index, disabled}) {
  return (
    <>
      <option key={index} disabled={disabled} className={`${disabled ? "text-danger" : ''}`} >{name}:00</option>
    </>
  )
}

export default BookingSlot
