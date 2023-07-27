import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './pages/ErrorPage'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h2>Home</h2>,
      },
      {
        path: '/about',
        element: <h2>About</h2>,
      },
    ],
  },
])
