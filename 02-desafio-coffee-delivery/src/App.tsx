import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Router } from './Router'
import { ContextsProvider } from './contexts/Provider'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextsProvider>
        <RouterProvider router={Router} />
      </ContextsProvider>

      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  )
}

export default App
