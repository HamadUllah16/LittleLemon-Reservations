import React, { useState } from 'react'
import MainButton from './Buttons/MainButton'
import Select from './Buttons/Select'
import InputBtn from './Buttons/InputBtn'
import { Link } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

function BookingForm({ state, dispatch, submitForm }) {
    const handleDate = (e) => {
        setDate(e.target.value)
        dispatch(e.target.value)
    }

    const renderSlots = state.availableTimes.map(item => {
        return (
            <option>{item}</option>
        )
    })


    const occasionList = ["Normal", "Meetup", "Birthday", "Anniversary"]
    const seatingList = ['Indoor', 'Outdoor']
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [diners, setDiners] = useState(2)
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')

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
                            <InputBtn inputName={"Full Name"} input={name} setInput={setName} type={'text'} />
                            <InputBtn inputName={"Phone"} input={phone} setInput={setPhone} type={'tel'} />
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
                                <label htmlFor='date' className='leadText'>Select a date</label>
                                <input className='form-control' type='date' id='date' value={date} onChange={handleDate} required />
                            </article>
                            <article className='col'>
                                <label className='leadText' htmlFor='bookingSlots'>Select a time</label>
                                <section className='dropDown rounded-3'>
                                    <select id='bookingSlots' className='border rounded-3' value={time} onChange={(e => setTime(e.target.value))}>
                                        {renderSlots}
                                    </select>
                                </section>
                            </article>
                            <article className='col'>
                                <label className='leadText' htmlFor='diners'>Diners: {diners}</label>
                                <input value={diners} onChange={(e => setDiners(e.target.value))} type="range" className="form-range" min="1" max="10" id="customRange2"></input>
                            </article>
                        </section>
                        <section className='row pt-3'>
                            <Select btnContext={"Seating"} btnState={seating} btnSetState={setSeating} options={seatingList} />
                            <Select btnContext={"Occasion"} btnState={occasion} btnSetState={setOccasion} options={occasionList} />
                            <article className='col'>
                                <label htmlFor='comment' className='leadText'>Comment</label>
                                <textarea className='form-control' id='comment' value={comment} onChange={e => setComment(e.target.value)} />
                            </article>
                        </section>
                        <article className='text-end'>
                            <Link to='/confirmation' element={<ConfirmedBooking />} >
                                <button className={`mt-5 mainButton primaryColor2 highlightText primaryText shadow`} type='submit' onClick={submitHandler} >Reserve</button>
                            </Link>
                        </article>
                    </form>
                </article>
            </section>
        </section>
    )
}
export default BookingForm
