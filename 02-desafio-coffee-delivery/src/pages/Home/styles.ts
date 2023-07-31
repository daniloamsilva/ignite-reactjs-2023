import { styled } from 'styled-components'

interface ItemProps {
  color: 'yellow-dark' | 'yellow' | 'black' | 'purple'
}

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

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    background: ${(props) => props.theme[props.color]};
    border-radius: 50%;

    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
