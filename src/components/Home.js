import React from 'react'
import Nav from './Nav'
import HeroSection from "./HeroSection"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import About from "./About"
import Footer from "./Footer"

function Home() {
    return (
        <>
            <Nav />
            <HeroSection />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home
