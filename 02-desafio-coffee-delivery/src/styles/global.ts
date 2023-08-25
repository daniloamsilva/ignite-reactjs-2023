import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* Typography */
  h1 { /* Title XL */
    font-size: 3rem;
    font-weight: 800;
  }

  h2 { /* Title L */
    font-size: 2rem;
    font-weight: 800;
  }

  h3 { /* Title M */
    font-size: 1.5rem;
    font-weight: 800;
  }

  h4 { /* Title S */
    font-size: 1.25rem;
    font-weight: 700;
  }

  h5 { /* Title XS */
    font-size: 1.125rem;
    font-weight: 700;
  }

  .Toastify__toast-body {
    font-size: 1rem;
  }
  
  /* Medium devices (landscape tablets, 768px and down) */
  @media only screen and (max-width: 768px) {
    * {
      font-size: 80%
    }
  }

  /* Large devices (laptops/desktops, 768px and up) */
  @media only screen and (min-width: 768px) {
    * {
      font-size: 90%
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    * {
      font-size: 100%
    }
  }
`
