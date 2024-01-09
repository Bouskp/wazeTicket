import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Evenement } from './Pages/Evenement'
import { Achat } from './Pages/Achat'
import { Paiement } from './Pages/Paiement'
import { Confirmation } from './Pages/Confirmation'
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
])

function App() {
  return <RouterProvider router={router} />
}

export default App
