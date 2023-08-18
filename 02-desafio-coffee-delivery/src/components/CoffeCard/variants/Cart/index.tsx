import { useContext } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../Counter'
import { Wrapper, Info, Price, RemoveButton } from './styles'
import { Coffee } from '../../../../coffees'
import { CartContext } from '../../../../contexts/CartContext'

interface CartProps {
  coffee: Coffee
}

export function Cart({ coffee }: CartProps) {
  const { cart, removeCoffeeFromCart } = useContext(CartContext)

  const quantity = cart.find((item) => item.id === coffee.id)?.quantity

  return (
    <Wrapper>
      <Info>
        <img src={`./coffees/${coffee.image}`} alt={coffee.name} />
        <div id="details">
          <span id="name">{coffee.name}</span>
          <div id="actions">
            <Counter id={coffee.id} quantity={quantity ?? 0} />
            <RemoveButton
              type="button"
              onClick={() => removeCoffeeFromCart(coffee.id)}
            >
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </div>
      </Info>
      <Price>
        R$ {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </Price>
    </Wrapper>
  )
}
