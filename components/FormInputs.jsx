import React from 'react'
import { useForm } from 'react-hook-form'

const Input = ({ label, register, required, type = 'text' }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} {...register(label, { required })} id={label} />
    </>
  )
}

export { Input }
