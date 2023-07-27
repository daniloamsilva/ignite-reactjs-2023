import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
