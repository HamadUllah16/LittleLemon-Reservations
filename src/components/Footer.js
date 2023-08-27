import React from 'react'
import Logo from "../assets/footer-logo.4470f9c9e815da98dbb3.png"

function Footer() {
    const copyYear = new Date().getFullYear()
    return (
        <footer className='primaryColor'>
            <section className='container'>
                <section className='row py-3'>
                    <section className='col-lg-6 footerImage'>
                        <img src={Logo} alt='Logo' className='img-fluid footerImage' />
                    </section>
                    <section className='col-lg-6'>
                        <h3 className='m-0 sectionTitle secondaryText3'>Navigation</h3>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Home</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>About</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Menu</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Reservations</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Order Online</a></li>
                            <li className='nav-item'><a className='nav-items leadText text-light' href='#home'>Login</a></li>
                        </ul>
                    </section>
                    {/* <section className='col-lg-4 col-md-4'>
                        <h3>Help & Support</h3>
                        <ul>
                            <li><a href='tel:12345'>12345</a></li>
                            <li><a href='mailto:Support@LittleLemon.com'>Support@LittleLemon.com</a></li>
                            <li><a href="http://maps.google.com/?q=Little Lemon Chicago" target='_blank' rel='noreferrer'>Chicago - Little Lemon</a></li>
                        </ul>
                    </section> */}
                </section>
                <section className='py-1'>
                    <p className='leadText m-0 secondaryText3 text-end'>
                        Copyright - Little Lemon {copyYear}
                    </p>
                </section>
            </section>
        </footer>
    )
}

export default Footer
