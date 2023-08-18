import { styled } from 'styled-components'

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 57% 1fr;
  gap: 2rem;
  margin: 2.5rem 0;

  h5 {
    margin-bottom: 0.95rem;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const FormOrder = styled.div`
  display: flex;
  flex-direction: column;

  #first-section {
    margin-bottom: 0.75rem;

    header {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      align-self: stretch;
    }

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    #form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      align-self: stretch;

      input {
        border-radius: 0.25rem;
        border: 1px solid ${(props) => props.theme['base-button']};
        background: ${(props) => props.theme['base-input']};
        padding: 0.75rem;
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }

      .form-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        align-self: stretch;
        width: 100%;

        .col-1 {
          width: 16.66%;
        }

        .col-2 {
          width: 33.32%;
        }

        .col-3 {
          width: 50%;
        }

        .col-4 {
          width: 66.64%;
        }

        .col-6 {
          width: 100%;
        }
      }
    }
  }

  #second-section {
    header {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      align-self: stretch;
    }

    svg {
      color: ${(props) => props.theme.purple};
    }

    #payment {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      align-self: stretch;

      @media (max-width: 540px) {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }

  .form-section {
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
  }

  .section-title {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .section-subtitle {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const SelectedCoffees = styled.div`
  #coffeeList {
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    border-radius: 6px 44px;
    background: ${(props) => props.theme['base-card']};
  }
`

export const Divider = styled.hr`
  align-self: stretch;
  border-top: 1px solid ${(props) => props.theme['base-button']};
`

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    span.label {
      font-size: 0.875rem;
    }

    span {
      font-size: 1rem;
    }

    &.total span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

export const SubmitButton = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 160%;
  font-weight: 700;
  color: ${(props) => props.theme.white};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    background: ${(props) => props.theme['yellow-light']};
  }
`
