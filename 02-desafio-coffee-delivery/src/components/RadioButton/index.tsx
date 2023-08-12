import { Wrapper } from './styles'

interface RadioButtonProps {
  label: string
  name: string
  htmlFor: string
  icon: React.ReactNode
  selected: string
  onChange: (value: string) => void
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
      <span>{label}</span>
    </Wrapper>
  )
}
