import { render, screen } from "@testing-library/react";
import App from './App'
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom";

test('Renders the BookingForm heading', () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument;
});
