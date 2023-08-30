import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function ConfirmedBooking() {
    return (
        <>
            <Nav />
            <section className='container'>
                <h1 className='subTitle mx-3  confirmation'>Your booking has been confirmed!</h1>
            </section>
            <Footer />
        </>
    )
}

export default ConfirmedBooking
