import './App.css';
import WebFont from "webfontloader"
import { useEffect } from 'react';
import ReserveATable from './components/ReserveATable';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"



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
        <Route path='/reserve' element={<ReserveATable />} />
      </Routes>
    </>
  );
}

export default App;
