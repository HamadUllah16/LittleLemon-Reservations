import React, {useReducer} from 'react'
import ReserveHero from './ReserveHero'
import BookingForm from './BookingForm'
import Nav from "./Nav"
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom'

function BookingPage() {
    const updateTimes = (state, date) => {
        return {
            availableTimes: fetchAPI(date)
        }
    }

    function fetchAPI(date) {
        let slots = []
        for (var i = 17; i < 22; i++) {
            if (Math.random() < 0.5) {
                slots.push(i + ":00")
            }
            if (Math.random() > 0.5) {
                slots.push(i + ":30")
            }
        }
        return slots;
    }

    const initializeTimes = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initializeTimes)

    function submitAPI(formData){
        return true
    }
    const navigate = useNavigate();
    function submitForm(formData){
        if(submitAPI(formData)){
            navigate('/confirmation')
        }

    }
    return (
        <>
            <Nav />
            <ReserveHero />
            <BookingForm state={state} dispatch={dispatch} submitForm={submitForm}/>
            <Footer />
        </>
    )
}

export default BookingPage
