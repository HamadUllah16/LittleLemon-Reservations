import React, { useState } from 'react'
import MainButton from './Buttons/MainButton'
import Select from './Buttons/Select'
import { Link } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function BookingForm({ state, dispatch, submitForm }) {
    const handleDate = (e) => {
        if (e.target.value.length) {
            setDate(e.target.value)
            setDateValidation(true)
            dispatch(e.target.value)
        }
        else {
            setDate(e.target.value)
            setDateValidation(false)
            dispatch(e.target.value)
        }
    }

    const renderSlots = state.availableTimes.map(item => {
        return (
            <option>{item}</option>
        )
    })


    const occasionList = ["Normal", "Meetup", "Birthday", "Anniversary"]
    const seatingList = ['Indoor', 'Outdoor']
    const [name, setName] = useState('')
    const [nameValidation, setNameValidation] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneValidation, setPhoneValidation] = useState(false)
    const [date, setDate] = useState('')
    const [dateValidation, setDateValidation] = useState(false)
    const [time, setTime] = useState('')
    const [diners, setDiners] = useState(2)
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')
    const disable = nameValidation && phoneValidation && dateValidation

    const nameHandler = ((e) => {
        if (e.target.value.length < 4) {
            setName(e.target.value)
            setNameValidation(false)
        }
        else {
            setName(e.target.value)
            setNameValidation(true)
        }
    })
    const phoneHandler = ((e) => {
        if (e.target.value.length < 11) {
            setPhone(e.target.value)
            setPhoneValidation(false)
        }
        else {
            setPhone(e.target.value)
            setPhoneValidation(true)
        }
    })
    const submitHandler = ((e) => {
        e.preventDefault()
        submitForm(e)
    })


    return (
        <section className='d-flex justify-content-center mb-5'>
            <section>
                <article>
                    <h1 className='sectionTitle secondaryText4 p-5 text-center'>Reserve a table</h1>
                </article>
                <article className='secondaryColor3 rounded-3'>
                    <form className='p-5' onSubmit={submitHandler}>
                        <section className='row pb-4'>
                            <article className='col'>
                                <label htmlFor={`name`} className={nameValidation ? 'leadText' : 'text-danger leadText'} >Full Name*</label>
                                <input className='form-control' type='text' id='name' value={name} onChange={nameHandler} aria-label="On Click" required />
                            </article>
                            <article className='col'>
                                <label htmlFor='phone' className={phoneValidation ? 'leadText' : 'text-danger leadText'} >Phone*</label>
                                <input className='form-control' type='tel' id='phone' value={phone} onChange={phoneHandler} aria-label="On Click" required />
                            </article>
                        </section>
                        <section className='row pb-4 border-bottom'>
                            <p className='leadText'>Login instead?</p>
                            <section className='d-flex justify-content-center '>
                                <article className='p-2'>
                                    <MainButton buttonName={'Login'} type={'button'} />
                                </article>
                                <article className='p-2'>
                                    <MainButton buttonName={'Register'} type={'button'} color={'primaryColor'} textColor={'secondaryText3'} />
                                </article>
                            </section>
                        </section>
                        <section className='row pt-3'>
                            <article className='col'>
                                <label htmlFor='date' className={dateValidation ? "leadText" : 'text-danger leadText'}>Select a date*</label>
                                <input className='form-control' type='date' id='date' value={date} onChange={handleDate} aria-label="On Click" required />
                            </article>
                            <article className='col'>
                                <label className='leadText' htmlFor='bookingSlots' >Select a time</label>
                                <section className='dropDown rounded-3'>
                                    <select id='bookingSlots' className='form-control border rounded-3' value={time} aria-label="On Click" onChange={(e => setTime(e.target.value))}>
                                        {renderSlots}
                                    </select>
                                </section>
                            </article>
                            <article className='col'>
                                <label className='leadText' htmlFor='diners'>Diners: {diners}</label>
                                <input value={diners} onChange={(e => setDiners(e.target.value))} aria-label="On Click" type="range" className="form-range" min="1" max="10" id="customRange2"></input>
                            </article>
                        </section>
                        <section className='row pt-3'>
                            <Select btnContext={"Seating"} btnState={seating} btnSetState={setSeating} options={seatingList} />
                            <Select btnContext={"Occasion"} btnState={occasion} btnSetState={setOccasion} options={occasionList} />
                            <article className='col'>
                                <label htmlFor='comment' className='leadText'>Comment</label>
                                <textarea className='form-control' id='comment' value={comment} aria-label="On Click" onChange={e => setComment(e.target.value)} />
                            </article>
                        </section>
                        <article className='text-end'>
                            <Link to='/confirmation' element={<ConfirmedBooking />} >
                                <button disabled={!disable} aria-label="On Click" className={disable ? `mt-5 mainButton primaryColor2 highlightText primaryText shadow` : 'mt-5 mainButtonDisabled shadow highlightText'} type='submit' onClick={submitHandler} >Reserve</button>
                            </Link>
                        </article>
                    </form>
                </article>
            </section>
        </section>
    )
}
export default BookingForm
