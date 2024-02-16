import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../../components'

export const Wrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
