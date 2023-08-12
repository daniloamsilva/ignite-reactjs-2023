import { MapPin, ShoppingCart } from 'phosphor-react'

import { Wrapper, Actions } from './styles'

import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
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
        <Link to="/checkout" id="cart">
          <ShoppingCart size={22} weight="fill" />
          <span id="counter">3</span>
        </Link>
      </Actions>
    </Wrapper>
  )
}
