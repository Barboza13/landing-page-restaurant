import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.png'
import '../../css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='icon-container'>
        <img src={Logo} alt='logo de cocina' />
        <Link className='logo-link' to='/'>Restaurante</Link>
      </div>
      <ul className='navbar-list'>
        <li className='navbar-list-item'>
          <Link className='navbar-link' to='/menu'>Menu</Link>
        </li>
        <li className='navbar-list-item'>
          <Link className='navbar-link' to='/reservation'>Reservacion</Link>
        </li>
        <li className='navbar-list-item'>
          <Link className='navbar-link' to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar