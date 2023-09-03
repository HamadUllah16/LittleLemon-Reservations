import React from 'react'
import Nav from '../Nav'
import HeroSection from "../HeroSection"
import Dishes from "../Dishes"
import Testimonials from "../Testimonials"
import About from "../About"
import Footer from "../Footer"

function Home() {
    return (
        <>
            <Nav />
            <HeroSection />
            <Dishes />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home
