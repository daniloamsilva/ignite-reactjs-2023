import { PaymentMethods } from '../../reducers/delivery/reducer'
import { Wrapper } from './styles'

interface RadioButtonProps {
  label: PaymentMethods
  name: string
  htmlFor: string
  icon: React.ReactNode
  selected: string | null
  onChange: (value: PaymentMethods) => void
}

const labels = {
  creditCard: 'Cartão de crédito',
  debitCard: 'Cartão de débito',
  cash: 'Dinheiro',
}

export function RadioButton({
  label,
  name,
  htmlFor,
  icon,
  selected,
  onChange,
}: RadioButtonProps) {
  const isChecked = selected === label

  function handleChange() {
    onChange(label)
  }

  return (
    <Wrapper checked={isChecked} htmlFor={htmlFor}>
      <input
        type="radio"
        name={name}
        id={htmlFor}
        checked={isChecked}
        onChange={handleChange}
        required
      />
      {icon}
      <span>{labels[label]}</span>
    </Wrapper>
  )
}
