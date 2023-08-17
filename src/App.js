import './App.css';
import WebFont from "webfontloader"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';


function App() {
useEffect(()=>{
  WebFont.load({
    google: {
      families: ['Markazi Text', 'Karla']
    }
  })
}, [])

  return (
    <>
      <Nav />
      <HeroSection />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
