import { Wrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function Counter({ quantity, onQuantityChange }: CounterProps) {
  return (
    <Wrapper>
      <button type="button" onClick={() => onQuantityChange(quantity - 1)}>
        <Minus size={15} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => onQuantityChange(quantity + 1)}>
        <Plus size={15} />
      </button>
    </Wrapper>
  )
}
