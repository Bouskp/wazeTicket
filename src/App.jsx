import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, ErrorPage, Evenement, Wrapper, Login, Register } from './Pages'
import Modals from '../components/Modals'
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
        element: (
          <Modals>
            <Login />
          </Modals>
        ),
      },
      {
        path: '/register',
        element: (
          <Modals>
            <Register />
          </Modals>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
