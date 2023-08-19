import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import Home from './Home'
import NavItem from './NavItem'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <section className="container my-4">
          <Link to='/' element={<Home />}><a className="navbar-brand" href="#1"><img src={Logo} alt='navbar-brand Logo' className='logo' /></a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <article className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavItem name={"Home"} address={"/"} />
              <NavItem name={"About"} address={"/about"} />
              <NavItem name={"Menu"} address={"/menu"} />
              <NavItem name={"Reservations"} address={"/reserve"} />
              <NavItem name={"Order"} address={"/order"} />
              <NavItem name={"Login"} address={"/login"} />
            </ul>
          </article>
        </section>
      </nav>
    </>
  )
}

export default Nav
