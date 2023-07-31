import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'

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
        path: '/about',
        element: <h2>About</h2>,
      },
    ],
  },
])
