import React, { useState } from 'react'
import MainButton from './Buttons/MainButton'
import Select from './Buttons/Select'
import { useNavigate } from 'react-router-dom';

function BookingForm({ state, dispatch, submitForm }) {
    const handleDate = (e) => {
        if (e.target.value.length) {
            setDate(e.target.value)
            dispatch(e.target.value)
        }
        else {
            setDate(e.target.value)
            dispatch(e.target.value)
        }
    }

    const renderSlots = state.availableTimes.map(item => {
        return (
            <option key={item}>{item}</option>
        )
    })


    const occasionList = ["Normal", "Meetup", "Birthday", "Anniversary"]
    const seatingList = ['Indoor', 'Outdoor']
    const [name, setName] = useState('')
    const [nameValidation, setNameValidation] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneValidation, setPhoneValidation] = useState(false)
    const [date, setDate] = useState()
    const [time, setTime] = useState('')
    const [diners, setDiners] = useState(2)
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')
    const disable = nameValidation && phoneValidation

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
        if (e.target.value.length < 10) {
            setPhone(e.target.value)
            setPhoneValidation(false)
        }
        else {
            setPhone(e.target.value)
            setPhoneValidation(true)
        }
    })
    const navigate = useNavigate()
    const submitHandler = ((e) => {
        e.preventDefault()
        submitForm(e)
        navigate('/confirmation')
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
                            <article className='col-sm-6'>
                                <label htmlFor={`name`} className={'leadText'} >Full Name*</label>
                                <input className='form-control' type='text' id='name' value={name} onChange={nameHandler} aria-label="On Click" required />
                            </article>
                            <article className='col-sm-6'>
                                <label htmlFor='phone' className={'leadText'} >Phone*</label>
                                <input className='form-control' type='tel' id='phone' value={phone} onChange={phoneHandler} aria-label="On Click" required />
                            </article>
                        </section>
                        <p className='leadText'>Login instead?</p>
                        <section className='d-flex justify-content-center pb-4 border-bottom'>
                            <article className='row'>
                                <article className='col-lg-6 col-md-6 col-sm-12 p-2 text-center'>
                                    <MainButton buttonName={'Login'} type={'button'} />
                                </article>
                                <article className='col-lg-6 col-md-6 col-sm-12 p-2 text-center'>
                                    <MainButton buttonName={'Register'} type={'button'} color={'primaryColor'} textColor={'secondaryText3'} />
                                </article>
                            </article>
                        </section>
                        <section className='row pt-3'>
                            <article className='col-lg-4 col-sm-6'>
                                <label htmlFor='date' className={"leadText"}>Select a date*</label>
                                <input className='form-control' type='date' id='date' value={date} required onChange={handleDate} aria-label="On Click" />
                            </article>
                            <article className='col-lg-4 col-sm-6'>
                                <label className='leadText' htmlFor='bookingSlots' >Select a time</label>
                                <section className='dropDown rounded-3'>
                                    <select id='bookingSlots' className='form-control border rounded-3' value={time} aria-label="On Click" onChange={(e => setTime(e.target.value))}>
                                        {renderSlots}
                                    </select>
                                </section>
                            </article>
                            <article className='col-lg-4 col-sm-12'>
                                <label className='leadText' htmlFor='diners'>Diners</label>
                                <input value={diners} onChange={(e => setDiners(e.target.value))}  id='diners' aria-label="On Click" type="number" className="form-control" min="1" max="10"></input>
                            </article>
                        </section>
                        <section className='row pt-3'>
                            <Select btnContext={"Seating"} btnState={seating} btnSetState={setSeating} options={seatingList} />
                            <Select btnContext={"Occasion"} btnState={occasion} btnSetState={setOccasion} options={occasionList} />
                            <article className='col-lg-4 col-sm-6'>
                                <label htmlFor='comment' className='leadText'>Comment</label>
                                <textarea className='form-control' id='comment' value={comment} aria-label="On Click" onChange={e => setComment(e.target.value)} />
                            </article>
                        </section>
                        <article className='text-end'>
                            <button disabled={!disable} aria-label="On Click" className={disable ? `mt-5 mainButton primaryColor2 highlightText primaryText shadow` : 'mt-5 mainButtonDisabled shadow highlightText'} type='submit' >Reserve</button>
                        </article>
                    </form>
                </article>
            </section>
        </section>
    )
}
export default BookingForm
