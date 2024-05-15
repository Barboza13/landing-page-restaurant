import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../css/Login.css'

function Login() {

  return (
    <main className='main-container'>
      <Navbar />
      <section className='form-container'>
        <form className='form'>
          <ul className='form-items-list'>
            <li className='form-item tittle-container'>
              <h1>Inicio de sesion</h1>
            </li>
            <li className='form-item'>
              <input className='form-input' type='email' placeholder='Ingrese su email' />
            </li>
            <li className='form-item'>
              <input className='form-input' type='password' placeholder='Ingrese su contraseña' />
            </li>
            <li className='form-item submit-container'>
              <input id='submit-button' type='submit' value='Iniciar sesion' />
            </li>
            <li className='form-item recovery'>
              <p>Haz olvidado tu contraseña?</p>
              <a href='#'>Recuperar</a>
            </li>
          </ul>
        </form>
      </section>
      <Footer />
    </main>
  )
}

export default Login