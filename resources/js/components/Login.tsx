import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../css/Login.css'

function Login() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
  const PASSWORD_REGEX = new RegExp('^(?=.*[0-9].*[0-9])[a-zA-Z0-9]{8,}$')

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
              <input className='form-input' type='email' placeholder='Ingrese su email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
              <p className={(EMAIL_REGEX.test(emailValue) ? 'successfully' : 'failure')}>
                {(EMAIL_REGEX.test(emailValue))
                  ? 'Email aceptado!'
                  : 'Email no aceptado.'}
              </p>
            </li>
            <li className='form-item'>
              <input className='form-input' type='password' placeholder='Ingrese su contraseña' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
              <p className={(PASSWORD_REGEX.test(passwordValue)) ? 'successfully' : 'failure'}>
                {(PASSWORD_REGEX.test(passwordValue))
                  ? 'Contraseña aceptada!'
                  : 'Debe tener 8 caracteres y dos numeros.'}
              </p>
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