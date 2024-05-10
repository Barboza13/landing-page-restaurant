import React from 'react'
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Menu from './Menu'
import Login from './Login'
import Reservation from './Reservation'
import resImage from '../../assets/images/fondo-restaurante.jpg'
import reservationIcon from '../../assets/icons/reservation-icon.png'
import '../../css/App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  )
}

function Main() {
  return (
    <main className='main-container'>
      <Navbar />
      <img id='background-image' src={resImage} alt='Fondo de un restaurante' />
      <section className='about-container'>
        <p id='about-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, commodi, nobis nesciunt pariatur voluptates recusandae itaque, asperiores hic quasi quo quis quam eius soluta ullam ipsam saepe! Nostrum, vero ex!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet id adipisci commodi, aliquam vel aperiam odio quaerat similique quae quo officiis libero blanditiis totam eum ex dicta corrupti, repudiandae fuga!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque cum aliquid quos, animi quasi eius facilis sit dolore doloremque quod iure minus nostrum rem dolor dolores officiis, tempore in iste.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sequi numquam inventore, esse dolorem culpa et consectetur fugiat pariatur modi est quisquam, neque tempore cum laborum? Iste neque aliquid omnis.
        </p>
        <div className='reservation'>
          <img src={reservationIcon} alt='Icono de reservacion' />
          <Link id='reservation-link' type='button' to='/reservation'>Reservacion</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}