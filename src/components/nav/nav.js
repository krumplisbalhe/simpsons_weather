import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const Nav = () => {
	return (
    <div className="nav">
      <ul className="navLinks">
        <NavLink activeClassName='isActive' to='/forecast'>
          <li>Forecast</li>
        </NavLink>
        <NavLink activeClassName='isActive' to='/today'>
          <li>Today</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
