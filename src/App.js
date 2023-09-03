import './App.css';
import WebFont from "webfontloader";
import { useEffect } from 'react';
import BookingPage from './components/Pages/BookingPage';
import Home from './components/Pages/Home';
import { Routes, Route } from "react-router-dom";
import Payment from './components/Payment';
import ConfirmedBooking from './components/ConfirmedBooking';
import AboutPage from './components/Pages/AboutPage';
import MenuPage from './components/Pages/MenuPage';
import OrderPage from './components/Pages/OrderPage';



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Markazi Text', 'Karla']
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/reserve' element={<BookingPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/confirmation' element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;