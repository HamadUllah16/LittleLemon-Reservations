import React from 'react'

function BookingSlot({name, disabled}) {
  return (
    <>
      <option disabled={disabled} className={`${disabled ? "text-danger" : ''}`} >{name}</option>
    </>
  )
}

export default BookingSlot
