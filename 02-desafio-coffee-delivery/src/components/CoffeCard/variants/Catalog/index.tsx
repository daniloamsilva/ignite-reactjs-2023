import { ShoppingCart } from 'phosphor-react'
import { Wrapper, Details, Footer, Tags } from './styles'
import { Counter } from '../../Counter'
import { Link } from 'react-router-dom'

export function Catalog() {
  return (
    <Wrapper>
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
          <Link to="/checkout" id="cartButton">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Wrapper>
  )
}
