import { MapPin, ShoppingCart } from 'phosphor-react'

import { Actions, Container } from './styles'

import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
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
    </Container>
  )
}
