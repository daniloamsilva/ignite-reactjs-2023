import { styled } from 'styled-components'

interface IconProps {
  color: 'yellow-dark' | 'yellow' | 'black' | 'purple'
}

export const Wrapper = styled.div<IconProps>`
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
`
