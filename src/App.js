import './App.css';
import WebFont from "webfontloader";
import { useEffect } from 'react';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Payment from './components/Payment';



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
        <Route path='/reserve' element={<BookingPage />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
