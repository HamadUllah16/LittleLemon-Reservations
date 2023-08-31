import { fireEvent, getAllByLabelText, getByLabelText, getByText, render, screen } from "@testing-library/react";
import App from './App'
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><BookingForm state={{availableTimes: ['17','18', '19']}} /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});
test("Validating HTML5 input validation", () => {
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const dateElement = screen.getByLabelText(/Select a date*/i)
    expect(dateElement).toHaveAttribute('type', 'date')

    const dinersElement = screen.getByLabelText(/Diners/)
    expect(dinersElement).toHaveAttribute('type', 'number')
})
test("Date field input attribute validation with, adding correct data", () => {
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const dateElement = screen.getByLabelText(/Select a date*/i)
    expect(dateElement).toHaveAttribute('type', 'date')
})
test("Diners field attribute validation, adding correct data", () => {
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const dinersElement = screen.getByLabelText(/Diners/)
    expect(dinersElement).toHaveAttribute('type', 'number')

    fireEvent.change(dinersElement, {'target': {'value' : 6}})
    expect(dinersElement).toHaveDisplayValue(6)
})
test("Diners field with invalid values should return empty field", () => {
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const dinersElement = screen.getByLabelText(/Diners/)

    fireEvent.change(dinersElement, {'target': {'value' : 'abc'}})
    expect(dinersElement).toHaveDisplayValue('')
})



test('Submit button should be disabled on empty input fields', ()=>{
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const nameElement = screen.getByLabelText(/Full Name*/)
    fireEvent.change(nameElement, {'target': {'value': ''}})

    const phoneElement = screen.getByLabelText(/Phone*/)
    fireEvent.change(phoneElement, {'target': {'value': ''}})

    const dateElement = screen.getByLabelText(/Select a date*/)
    fireEvent.change(dateElement, {'target': {'value': ''}})

    const submitElement = screen.getByText('Reserve')
    expect(submitElement).toBeDisabled()
})
test('Submit button should be enabled if the input fields are filled',()=>{
    render(
        <BrowserRouter>
            <BookingForm state={{availableTimes : ['17','18','19','20']}}/>
        </BrowserRouter>
    )
    const nameElement = screen.getByLabelText(/Full Name*/)
    fireEvent.change(nameElement, {'target': {'value': 'dummyName'}})

    const phoneElement = screen.getByLabelText(/Phone*/)
    fireEvent.change(phoneElement, {'target': {'value': 12345678}})

    const dateElement = screen.getByLabelText(/Select a date*/)
    fireEvent.change(dateElement, {'target': {'value': '01-08-2022'}})

    const submitElement = screen.getByText('Reserve')
    expect(submitElement).toBeDisabled(false)
})
