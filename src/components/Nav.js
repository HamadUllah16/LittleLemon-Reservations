import React from 'react'
import Logo from "../assets/Logo.svg"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <section className="container my-4">
        <a className="navbar-brand" href="#1"><img src={Logo} alt='navbar-brand Logo' className='logo' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <article className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a  className='nav-items leadText' href='#home'>Home</a>
            </li>
            <li className="nav-item">
              <a className='nav-items leadText' href='#home'>About</a>
            </li>
            <li className="nav-item">
              <a className='nav-items leadText' href='#home'>Menu</a>
            </li>
            <li className="nav-item">
              <a href="/Reserve" className='nav-items leadText'>Reservations</a>
            </li>
            <li className="nav-item">
              <a className='nav-items leadText' href='#home'>Order Online</a>
            </li>
            <li className="nav-item">
              <a className='nav-items leadText' href='#home'>Login</a>
            </li>
          </ul>
        </article>
      </section>
    </nav>
  )
}

export default Nav
