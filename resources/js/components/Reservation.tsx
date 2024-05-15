import React, { ChangeEvent, FormEvent, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../../css/Reservation.css'

interface FormData {
  name: string,
  telephone: string,
  email: string,
  reservation_date: string,
}

function Reservation(): JSX.Element {
  const API: string = 'http://127.0.0.1:8000/api/reservation'
  const [formData, setFormData] = useState<FormData>({
    name: '',
    telephone: '',
    email: '',
    reservation_date: ''
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
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Ocurrio un error al enviar los datos!')
      }

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
      <Navbar />
      <section className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <ul className='form-items-list'>
            <li className='form-item tittle-container'>
              <h1>Reservacion</h1>
            </li>
            <li className='form-item'>
              <input
                className='form-input'
                type='text'
                placeholder='Nombre completo'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </li>
            <li className='form-item'>
              <input
                className='form-input'
                type='text'
                placeholder='Nro. de telefono'
                name='telephone'
                value={formData.telephone}
                onChange={handleChange}
              />
            </li>
            <li className='form-item'>
              <input
                className='form-input'
                type='email'
                placeholder='Direccion de correo'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </li>
            <li className='form-item'>
              <label id='date-label' htmlFor="date">Fecha a reservar:</label>
              <input
                id='date'
                className='form-input'
                type='date'
                placeholder='Fecha a reservar'
                name='reservation_date'
                value={formData.reservation_date}
                onChange={handleChange}
              />
            </li>
            <li className='form-item submit-container'>
              <input
                id='submit-button'
                type='submit'
                value='Reservar'
              />
            </li>
          </ul>
        </form>
      </section>
      <Footer />
    </main>
  )
}

export default Reservation