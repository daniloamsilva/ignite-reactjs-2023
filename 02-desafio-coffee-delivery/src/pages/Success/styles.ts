import { styled } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 5rem;
`

export const Header = styled.div`
  margin-bottom: 2.5rem;

  h2 {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p.subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.37rem;

  img {
    width: 100%;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`

export const OrderInfo = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`
