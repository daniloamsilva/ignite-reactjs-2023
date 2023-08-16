import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5.3095rem;
    height: 2.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;

  #location {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-light']};

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['purple-dark']};
    }

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  #cart {
    display: inline-flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    position: relative;
    border: none;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    #counter {
      display: flex;
      width: 1.25rem;
      height: 1.25rem;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      font-size: 0.75rem;
      font-weight: 700;
      text-align: center;

      position: absolute;
      right: -0.5rem;
      top: -0.5rem;
    }
  }
`
