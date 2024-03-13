import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styled from 'styled-components'
import { MdOutlineMail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Button } from './Wrapper'
import { Link } from 'react-router-dom'

export const FormContainer = styled.form`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  & > .title {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.first};
    text-decoration: underline;
  }
`
const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0.25rem solid ${({ theme }) => theme.first};
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
`
const Label = styled.label`
  & > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.first};
  }
`
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border-left: none;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.first};
  font-size: 1.3rem;
`
const FootContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & .link {
    color: ${({ theme }) => theme.first};
    text-decoration: underline;
  }
`

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleSubmit } = useForm()

  const onSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`http://localhost:3000/auth/login`, {
      email,
      password,
    })

    console.log(response)
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <p className='title'>Connexion</p>
      <InputContainer>
        <Label htmlFor='email'>
          <MdOutlineMail />
        </Label>
        <Input type='email' required />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='password'>
          <RiLockPasswordFill />
        </Label>
        <Input
          type='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <FootContainer>
        <Button type='submit' value='connecter vous'>
          Connectez-vous
        </Button>
        <p>
          Vous n'avez pas de compte ?
          <Link to='/register' className='link'>
            creer un compte
          </Link>
        </p>
      </FootContainer>
    </FormContainer>
  )
}

export default Login
