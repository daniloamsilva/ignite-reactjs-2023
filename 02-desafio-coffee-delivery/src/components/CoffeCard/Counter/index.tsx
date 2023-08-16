import { useContext } from 'react'
import { Wrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

import { CartContext } from '../../../contexts/CartContext'

interface CounterProps {
  id: number
  quantity: number
}

export function Counter({ id, quantity }: CounterProps) {
  const { incrementCoffeeToCart, decrementCoffeToCart } =
    useContext(CartContext)

  return (
    <Wrapper>
      <button type="button" onClick={() => decrementCoffeToCart(id)}>
        <Minus size={15} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => incrementCoffeeToCart(id)}>
        <Plus size={15} />
      </button>
    </Wrapper>
  )
}
