import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({name, address}) {
    return (
        <>
            <li className="nav-item">
                <article className='navBox text-center'>
                    <NavLink to={`${address}`} className='p-2 nav-items primaryText leadText'>{name}</NavLink>
                </article>
            </li>
        </>
    )
}

export default NavItem
