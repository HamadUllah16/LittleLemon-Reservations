import React from 'react'
import Logo from "../assets/android-chrome-512x512.png"

function Footer() {
    return (
        <footer className='primaryColor'>
            <section className='container'>
                <section className='row py-3'>
                    <section className='col-2'>
                        <img src={Logo} alt='Logo' className='img-fluid' />
                    </section>
                    <section className='col m-3'>
                        <h3>Quick Link</h3>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Home</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>About</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Menu</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Reservations</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Order Online</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Login</a></li>
                        </ul>
                    </section>
                    <section className='col'>
                        <h3>Help & Support</h3>
                        <ul>
                            <li><a href='tel:12345'>12345</a></li>
                            <li><a href='mailto:Support@LittleLemon.com'>Support@LittleLemon.com</a></li>
                            <li><a href="http://maps.google.com/?q=Little Lemon Chicago" target='_blank' rel='noreferrer'>Chicago - Little Lemon</a></li>
                        </ul>
                    </section>
                </section>
            </section>
        </footer>
    )
}

export default Footer
