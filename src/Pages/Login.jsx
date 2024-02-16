import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`http://localhost:3000/auth/login`, {
      email,
      password,
    })

    console.log(response)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor='email'>email:</label>
        <input
          type='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <input
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type='submit' value='connecter vous' />
    </form>
  )
}

export default Login
