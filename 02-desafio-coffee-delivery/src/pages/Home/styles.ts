import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 5.88rem;
  margin-bottom: 6.75rem;
  justify-content: space-between;
`

export const Title = styled.div`
  display: flex;
  width: 36.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  margin-top: 4.12rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
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
  }
`
