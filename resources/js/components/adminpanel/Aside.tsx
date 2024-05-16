import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dropdownArrowDown from '../../../assets/icons/dropdown-arrow-down.png'
import '../../../css/adminpanel/Aside.css'

interface dropdownMenuProps {
  title: string,
  items: { link: string, linkLabel: string }[]
}

function DropdownMenu({ title, items }: dropdownMenuProps): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li className='aside-nav-item'>
      <button className='dropdown-button' onClick={handleClick}>
        {title}
        <img src={dropdownArrowDown} />
      </button>
      <ul className={`dropdown-items-list ${isActive ? 'active' : ''}`}>
        {items.map((item, index) => (
          <li className='dropdown-items' key={index}>
            <Link className='dropdown-link' to={item.link}>{item.linkLabel}</Link>
          </li>
        ))}
      </ul >
    </li >
  )
}

function Aside(): JSX.Element {
  const menuItems = [
    { link: '', linkLabel: 'Lista del menu' },
    { link: '', linkLabel: 'Agregar platillo' }
  ]

  const userItems = [
    { link: '', linkLabel: 'Lista de usuarios' },
    { link: '', linkLabel: 'Agregar usuario' }
  ]

  return (
    <aside className='aside-nav'>
      <ul className='aside-nav-items-list'>
        <li className='aside-nav-item'>
          <h1>Panel de control</h1>
        </li>
        <DropdownMenu title='Menu' items={menuItems} />
        <DropdownMenu title='Usuarios' items={userItems} />
      </ul>
    </aside>
  )
}

export default Aside