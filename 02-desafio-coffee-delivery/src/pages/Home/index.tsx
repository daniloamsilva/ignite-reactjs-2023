import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import Cup from '../../assets/cup.png'
import { Container, Item, Items, Title } from './styles'

export function Home() {
  return (
    <>
      <Container>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <Items>
            <Item color="yellow-dark">
              <div className="icon">
                <ShoppingCart weight="fill" size={16} />
              </div>
              Compra simples e segura
            </Item>
            <Item color="black">
              <div className="icon">
                <Package weight="fill" size={16} />
              </div>
              Embalagem mantém o café intacto
            </Item>
            <Item color="yellow">
              <div className="icon">
                <Timer weight="fill" size={16} />
              </div>
              Entrega rápida e rastreada
            </Item>
            <Item color="purple">
              <div className="icon">
                <Coffee weight="fill" size={16} />
              </div>
              O café chega fresquinho até você
            </Item>
          </Items>
        </div>
        <div id="image">
          <img src={Cup} alt="Copo de café" />
        </div>
      </Container>

      <h2>Nossos cafés</h2>
    </>
  )
}
