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
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='leadText text-light' href='mailto: littlelemon@meta.com'>LittleLemon@meta.com</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='tel:12345678'>12345678</a></li>
                            <li className='nav-item'><a className='leadText text-light' href='https://maps.google.com/?q=littlelemonrestaurant'>Little Lemon Chicago</a></li>
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
                <section className='pt-3'>
                    <p className='text-center leadText m-0 secondaryText3 text-end'>
                    Meta Front-End Capstone Project - Hamad {copyYear}
                    </p>
                </section>
            </section>
        </footer>
    )
}

export default Footer
