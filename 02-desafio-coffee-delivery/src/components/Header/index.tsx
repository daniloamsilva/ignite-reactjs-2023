import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Wrapper, Actions } from './styles'
import Logo from '../../assets/logo.png'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)
  const total = cart.reduce((acc, coffee) => acc + coffee.quantity, 0)

  return (
    <Wrapper>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <Actions>
        <div id="location">
          <MapPin size={22} weight="fill" />
          <span>São José dos Campos, SP</span>
        </div>
        <Link to="/cart" id="cart">
          <ShoppingCart size={22} weight="fill" />
          {!!total && <span id="counter">{total}</span>}
        </Link>
      </Actions>
    </Wrapper>
  )
}
