import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Evenement } from './Pages/Evenement'
import { Achat } from './Pages/Achat'
import { Paiement } from './Pages/Paiement'
import { Confirmation } from './Pages/Confirmation'
import Signup from './Pages/Signup'
import Signout from './Pages/Signout'
import Profile from './Pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/event',
    element: <Evenement />,
  },
  {
    path: '/achat',
    element: <Achat />,
  },
  {
    path: '/confirmation',
    element: <Confirmation />,
  },
  {
    path: '/paiement',
    element: <Paiement />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signout',
    element: <Signout />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
