import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../css/Login.css'

interface FormData {
  email: string,
  password: string
}

function Login() {
  const API = 'http://127.0.0.1:8000/api/login'
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Ocurrio un error en la auntenticacion.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='main-container'>
      <Navbar />
      <section className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <ul className='form-items-list'>
            <li className='form-item tittle-container'>
              <h1>Inicio de sesion</h1>
            </li>
            <li className='form-item'>
              <input
                className='form-input'
                type='email'
                placeholder='Ingrese su email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </li>
            <li className='form-item'>
              <input
                className='form-input'
                type='password'
                placeholder='Ingrese su contraseña'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </li>
            <li className='form-item submit-container'>
              <input
                id='submit-button'
                type='submit'
                value='Iniciar sesion'
              />
            </li>
            <li className='form-item recovery'>
              <p>Haz olvidado tu contraseña?</p>
              <Link to='/admin-panel'>Recuperar</Link>
            </li>
          </ul>
        </form>
      </section>
      <Footer />
    </main>
  )
}

export default Login