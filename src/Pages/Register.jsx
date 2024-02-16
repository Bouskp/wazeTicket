import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/FormInputs.jsx'
import axios from 'axios'

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

  console.log(watch('nom'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input label='nom' register={register} required={true} />
      </div>
      <div>
        <Input label='prenom' register={register} required={true} />
      </div>
      <div>
        <Input label='email' register={register} required={true} type='email' />
      </div>
      <div>
        <Input label='ville' register={register} required={true} />
      </div>
      <div>
        <Input label='pays' register={register} required={true} />
      </div>
      <div>
        <Input
          label='telephone'
          register={register}
          required={true}
          type='number'
        />
      </div>
      <div>
        <Input label='siteWeb' register={register} required={false} />
      </div>
      <div>
        <Input label='avatar' register={register} required={true} type='file' />
      </div>
      <div>
        <Input
          label='password'
          register={register}
          required={true}
          type='password'
        />
      </div>
      <input type='submit' value='creer un compte' />
    </form>
  )
}

export default Register
