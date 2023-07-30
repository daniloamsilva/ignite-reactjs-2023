import { MapPin, ShoppingCart } from 'phosphor-react'

import { Actions, Container } from './styles'

import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />
      <Actions>
        <div id="location">
          <MapPin size={22} weight="fill" />
          <span>São José dos Campos, SP</span>
        </div>
        <div id="cart">
          <ShoppingCart size={22} weight="fill" />
          <span id="counter">3</span>
        </div>
      </Actions>
    </Container>
  )
}
