import { styled } from 'styled-components'

interface ItemProps {
  color: 'yellow-dark' | 'yellow' | 'black' | 'purple'
}

export const Container = styled.div`
  margin-top: 5rem;
`

export const Header = styled.div`
  margin-bottom: 2.5rem;

  h3 {
    font-size: 2rem;
    font-weight: 800;
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
`

export const OrderInfo = styled.div`
  display: flex;
  width: 32.875rem;
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

  .itemInfo {
    font-size: 1rem;
    font-weight: 400;
  }
`
