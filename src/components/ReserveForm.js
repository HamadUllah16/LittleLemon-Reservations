import React, { useState, useTransition } from 'react'
import MainButton from './Buttons/MainButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Select from './Buttons/Select'
import InputBtn from './Buttons/InputBtn'

function ReserveForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [diners, setDiners] = useState('')
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')

    const occasionList = ["Normal", "Meetup", "Birthday", "Anniversary"]
    const seatingList = ['Indoor', 'Outdoor']
    const dinersList = ['2-3', '4-5', '6-7']
    const timeList = ['10am - 12pm', '12pm - 2pm', '4pm - 6pm', '7pm - 9pm']

    const submitHandler = ((e) => {
        e.preventDefault()
        setName('')
        setPhone('')
        setDate('')
        setTime('')
        setDiners('')
        setSeating('')
        setOccasion('')
        setComment('')
    })
    return (
        <section className='d-flex justify-content-center mb-5'>
            <section>
                <article>
                    <h1 className='sectionTitle secondaryText4 p-5 text-center'>Reserve a table</h1>
                </article>
                <article className='secondaryColor3 formDiv'>
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
                                <input className='form-control' type='date' id='date' value={date} onChange={e => setDate(e.target.value)} required />
                            </article>
                            <Select btnContext={"Select a time"} btnState={time} btnSetState={setTime} options={timeList} />
                            <Select btnContext={"Diners"} btnState={diners} btnSetState={setDiners} options={dinersList} />
                        </section>
                        <section className='row pt-3'>
                            <Select btnContext={"Seating"} btnState={seating} btnSetState={setSeating} options={seatingList} />
                            <Select btnContext={"Occasion"} btnState={occasion} btnSetState={setOccasion} options={occasionList} />
                            <article className='col'>
                                <label htmlFor='comment' className='leadText'>Comment</label>
                                <textarea className='form-control' id='comment' value={comment} onChange={e => setComment(e.target.value)} />
                            </article>
                        </section>
                        <section className='row pt-5'>
                            <MainButton buttonName={"Reserve for $10"} type={'submit'} color={'primaryColor2'} textColor={'primaryText'} />
                        </section>
                    </form>
                </article>
            </section>
        </section>
    )
}
export default ReserveForm
