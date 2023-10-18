import React from 'react'
import Logo from "../assets/LittleLemonFooter.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    const copyYear = new Date().getFullYear()
    return (
        <footer className='primaryColor'>
            <section className='container '>
                <section className='row pt-5'>
                    <section className='col-lg-3 col-md-3 col-sm-6 col-6 pt-2 footerImage'>
                        <img src={Logo} alt='Logo' className='img-fluid footerImage' />
                    </section>
                    <section className='col-lg-3 col-md-3 col-sm-6 col-6 pt-2'>
                        <h3 className='m-0 sectionTitle secondaryText2 pb-2'>Navigation</h3>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>Home</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>About</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>Menu</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>Reservations</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>Order Online</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#home'>Login</a></li>
                        </ul>
                    </section>
                    <section className='col-lg-3 col-md-3 col-sm-6 col-6 pt-2'>
                        <h3 className='m-0 sectionTitle secondaryText2 pb-2'>Help & Support</h3>
                        <ul className='navbar-nav overflow-hidden'>
                            <li className='nav-item'><a className='leadText text-light' href='mailto: hamadullah16@gmail.com'>hamadullah16@gmail.com</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='https://maps.google.com/?q=littlelemonrestaurant'>Little Lemon Chicago</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='https://github.com/HamadUllah16/LittleLemon-Reservations'>GitHub</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='https://www.linkedin.com/in/hamadullah16/'>LinkedIn</a></li>
                        </ul>
                    </section>
                    <section className='col-lg-3 col-md-3 col-sm-6 col-6 pt-2'>
                        <h3 className='m-0 sectionTitle secondaryText2 pb-2'>Social Links</h3>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className=' leadText text-light' href='#facebook'><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#instagram'><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li className='nav-item'><a className='leadText text-light' href='#twitter'><FontAwesomeIcon icon={faTwitter} /></a></li>
                        </ul>
                    </section>
                </section>
                <hr className='mt-4 text-light'></hr>
                <section className='pb-2'>
                    <p className='text-center leadText m-0 secondaryText3'>
                    Meta Front-End Capstone Project - Hamad {copyYear}
                    </p>
                </section>
            </section>
        </footer>
    )
}

export default Footer
