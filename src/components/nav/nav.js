import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const Nav = ({currentTemperature, description}) => {
	return (
    <div className="nav">
      <ul className="nav-links">
        <NavLink activeClassName='is-active' to='/forecast'>
          <li>Forecast</li>
        </NavLink>
        <NavLink activeClassName='is-active' to='/today'>
          <li>Today</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
