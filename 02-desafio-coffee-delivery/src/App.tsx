import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <RouterProvider router={Router} />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
