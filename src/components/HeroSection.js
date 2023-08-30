import React from 'react'
import HeroImage from "../assets/restauranfood.jpg"
import MainButton from './Buttons/MainButton'

function HeroSection() {
  const littleLemon = {
    name: "Little Lemon",
    location: "Chicago",
    descrption: "We are a family owned Mediterranean restaurant, focused on traditional receipes served with modern twist."
  }
  return (
    <div className='mainDiv'>
      <section className='primaryColor'>
        <section className='row mx-md-5 justify-content-evenly'>
          <article className='col-lg-6 col-md-12 d-flex align-items-center justify-content-center'>
            <section className='mt-2 '>
              <p className='displayTitle primaryText2 m-0'>{littleLemon.name}</p>
              <p className='subTitle secondaryText3 m-0'>{littleLemon.location}</p>
              <p className='paragraphText secondaryText3 heroSectionText'>{littleLemon.descrption}</p>
              <MainButton buttonName="Reserve a table" type={'button'} color={'primaryColor2'} textColor={'primaryText'} link={'/reserve'} />
            </section>
          </article>
          <article className='col-lg-6 py-3 col-md-12 justify-content-center heroImageBox'>
            <img className='heroImage' src={HeroImage} alt='home banner' />
          </article>
        </section>
      </section >
    </div >
  )
}

export default HeroSection
