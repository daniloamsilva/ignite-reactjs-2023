import { styled } from 'styled-components'

export const Wrapper = styled.div`
  margin: 5.88rem 0 6.75rem 0;
  display: grid;
  grid-template-columns: 36.75rem 1fr;
  gap: 2rem;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1030px) {
    grid-template-columns: 1fr;
    gap: 0;

    img {
      display: none;
    }

    body {
      background-color: red;
    }
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 40rem;
  margin: 0 auto;

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  max-width: 40rem;
  margin: 3rem auto 0;
`

export const CoffeeList = styled.div`
  h2 {
    font-size: 2rem;
  }

  ul {
    margin-top: 3.38rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
