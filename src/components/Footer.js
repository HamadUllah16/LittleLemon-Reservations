import React from 'react'
import Logo from "../assets/LittleLemonFooter.jpg"

function Footer() {
    const copyYear = new Date().getFullYear()
    return (
        <footer className='primaryColor'>
            <section className='container '>
                <section className='row pt-5'>
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
