import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { Router } from './Router'
import { ContextsProvider } from './contexts/Provider'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextsProvider>
        <RouterProvider router={Router} />
      </ContextsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
