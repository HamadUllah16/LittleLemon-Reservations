import React from 'react'

import Chef from "../assets/restaurant chef B.jpg"
import ChefandAdrian from "../assets/Mario and Adrian A.jpg"

function About() {
  const littleLemon = {
    name: "Little Lemon",
    location: "Chicago",
    descrption: "We are a family owned Mediterranean restaurant, focused on traditional receipes served with modern twist."
  }
  return (
    <div>
      <div className='container-sm'>
        <section className='row py-5 mainRow'>
          <article className='col-lg-4 col-sm-12'>
            <section className=' my-5'>
              <article className='mx-5'>
                <p className='displayTitle primaryText2 m-0'>{littleLemon.name}</p>
                <p className='subTitle primaryText m-0'>{littleLemon.location}</p>
                <p className='paragraphText secondaryText4'>{littleLemon.descrption}</p>
              </article>
            </section>
          </article>
          <article className='col-lg-4 col-sm-6 rounded my-1'>
            <img className='img-fluid rounded-3' src={Chef} alt='home banner' />
          </article>
          <article className='col-lg-4 col-sm-6 rounded'>
            <img className='img-fluid rounded-3 my-1' src={ChefandAdrian} alt='home banner' />
          </article>
        </section>
      </div>
    </div>
  )
}

export default About
