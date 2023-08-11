import { styled } from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin: 2.5rem 0;

  h3 {
    margin-bottom: 0.95rem;
  }
`

export const FormOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

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
          width: 3.75rem;
        }

        .col-2 {
          width: 12.5rem;
        }

        .col-3 {
          width: 17.25rem;
        }

        .col-4 {
          width: 21.75rem;
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
  width: 28rem;

  #coffeeList {
    display: flex;
    width: 28rem;
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

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
