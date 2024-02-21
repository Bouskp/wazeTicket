import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, ErrorPage, Evenement, Wrapper, Login, Register } from './Pages'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/event',
        element: <Evenement />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
