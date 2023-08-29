import React, { useReducer, useState } from 'react'
import MainButton from './Buttons/MainButton'
import Select from './Buttons/Select'
import InputBtn from './Buttons/InputBtn'
import BookingSlot from './BookingSlot'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function updateTimes(state,action){
    return{availableTimes: state.availableTimes}
}
function BookingForm() {
    const occasionList = ["Normal", "Meetup", "Birthday", "Anniversary"]
    const seatingList = ['Indoor', 'Outdoor']
    const [bookedSlots, setBookedSlots] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('17')
    const [diners, setDiners] = useState(2)
    const [seating, setSeating] = useState('')
    const [occasion, setOccasion] = useState('')
    const [comment, setComment] = useState('')
    const initializeTimes =  {availableTimes : ['17', '18', '19', '20']}
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    const submitHandler = ((e) => {
        e.preventDefault()
        setBookedSlots([...bookedSlots, time])
        setName('')
        setPhone('')
        setDate('')
        setTime('')
        setDiners(2)
        setSeating('')
        setOccasion('')
        setComment('')
        toast.success('Your table is reserved!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    })
    const renderSlots = state.availableTimes.map((item,index) => bookedSlots.includes(item) ? <BookingSlot key={index} name={item} disabled={true} /> : <BookingSlot key={index} name={item} />)
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
                                <input className='form-control' type='date' id='date' value={date} onChange={() => dispatch()} required />
                            </article>
                            <article className='col'>
                                <label className='leadText' htmlFor='bookingSlots'>Select a time</label>
                                <section className='dropDown rounded-3'>
                                    <select id='bookingSlots' className='border rounded-3' value={time} onChange={(e=>setTime(e.target.value))}>
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
                            <button className={`mt-5 mainButton primaryColor2 highlightText primaryText shadow`} type='submit' onClick={submitHandler} >Reserve for $10</button>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </article>
                    </form>
                </article>
            </section>
        </section>
    )
}
export default BookingForm
