import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
])
