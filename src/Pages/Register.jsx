import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/FormInputs.jsx'
import axios from 'axios'
import styled from 'styled-components'
import { Button } from './Wrapper.jsx'
import { Link } from 'react-router-dom'

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.first};
  text-decoration: underline;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
`

const FormContainer = styled.form`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(40px, auto);
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
`
const InputContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputEl = styled.input`
  width: 100%;
  outline: none;
  border: none;
  /* background: ${({ theme }) => theme.first}; */
  padding: 0.25rem 0.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.first};
  font-size: 1.2rem;
  &::placeholder {
    color: ${({ theme }) => theme.first};
  }
`
const FootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.5rem;
  grid-column: 1/3;
  gap: 0.5rem;

  & .link {
    color: ${({ theme }) => theme.first};
    text-decoration: underline;
  }
`

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('nom', data.nom)
    formData.append('prenom', data.prenom)
    formData.append('pays', data.pays)
    formData.append('ville', data.ville)
    formData.append('siteWeb', data.siteWeb)
    formData.append('email', data.email)
    formData.append('telephone', data.telephone)
    formData.append('avatar', data.avatar[0])
    formData.append('password', data.password)

    axios
      .post('http://localhost:3000/auth/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <Title>Creer un compte</Title>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputEl placeholder='nom' required />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='prenom' required={true} />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='email' required={true} type='email' />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='ville' required={true} />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='pays' required={true} />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='telephone' required={true} type='number' />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='siteWeb' required={false} />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='avatar' required={false} type='file' />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='password' required={true} type='password' />
        </InputContainer>
        <InputContainer>
          <InputEl placeholder='password' required={true} type='password' />
        </InputContainer>
        <FootContainer>
          <Button type='submit'>Creer un compte</Button>
          <p>
            Vous avez déjà un compte ?{' '}
            <Link to='/login' className='link'>
              Connectez-vous
            </Link>
          </p>
        </FootContainer>
      </FormContainer>
    </>
  )
}

export default Register
