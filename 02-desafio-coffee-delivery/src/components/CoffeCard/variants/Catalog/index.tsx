import { ShoppingCart } from 'phosphor-react'
import { Container, Details, Footer, Tags } from './styles'
import { Counter } from '../../Counter'

export function Catalog() {
  return (
    <Container>
      <img src="./coffees/Americano.png" alt="Americano" />

      <Tags>
        <span>Especial</span>
        <span>Alcoólico</span>
        <span>Gelado</span>
      </Tags>

      <Details>
        <h3>Expresso Cremoso</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Details>

      <Footer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <div className="actions">
          <Counter />
          <button id="cartButton">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Footer>
    </Container>
  )
}
