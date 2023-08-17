import React from 'react'
import MainButton from './MainButton'

function ReserveForm() {
    return (
        <>
            <section>
                <h3>Reserve a table</h3>
            </section>
            <section>
                <form>
                    <section className='row'>
                        <article className='col'>
                            <label htmlFor='name'>First Name</label>
                            <input type='text' id='name' />
                        </article>
                        <article className='col'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type='text' id='lastName' />
                        </article>
                    </section>
                    <section className='row'>
                        <article className='col'>
                            <label htmlFor='phone'>Phone</label>
                            <input type='tel' id='phone' />
                        </article>
                    </section>
                    <section className='row'>
                        <article className='col'>
                            <label htmlFor='date'>Select a date</label>
                            <input type='date' id='date' />
                        </article>
                        <article className='col'>
                            <label htmlFor='time'>Select a time</label>
                            <select id='time'>
                                <option>10 AM - 12 PM</option>
                                <option>12 PM - 2 PM</option>
                                <option>1 PM - 3 PM</option>
                            </select>
                        </article>
                        <article className='col'>
                            <label htmlFor='diners'>Diners</label>
                            <select id='diners'>
                                <option>2-3</option>
                                <option>4-5</option>
                                <option>6-7</option>
                            </select>
                        </article>
                    </section>
                    <section className='row'>
                        <article className='col'>
                            <label htmlFor='seating'>Seating</label>
                            <select>
                                <option>Indoor</option>
                                <option>Outdoor</option>
                            </select>
                        </article>
                        <article className='col'>
                            <label htmlFor='occasion'>Select Occasion</label>
                            <select id='occasion'>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </article>
                        <article className='col'>
                            <label htmlFor='comment'>Comment</label>
                            <textarea id='comment' />
                        </article>
                    </section>
                    <MainButton buttonName = {"Reserve for $10"} />
                </form>
            </section>
        </>
    )
}
    export default ReserveForm
