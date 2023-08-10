import { styled, css } from 'styled-components'

interface ContainerProps {
  checked: boolean
}

export const Container = styled.label<ContainerProps>`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      border: 1px solid ${props.theme.purple};
      background: ${props.theme['purple-light']};
    `}

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input {
    position: absolute;
    opacity: 0;
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
  }
`
