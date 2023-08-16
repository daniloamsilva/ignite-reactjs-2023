import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Wrapper, Details, Footer, Tags } from './styles'
import { Counter } from '../../Counter'
import { Coffee } from '../../../../coffees'
import { CartContext } from '../../../../contexts/CartContext'

interface CatalogProps {
  coffee: Coffee
}

export function Catalog({ coffee }: CatalogProps) {
  const { cart } = useContext(CartContext)

  const quantity = cart.find((item) => item.id === coffee.id)?.quantity

  return (
    <Wrapper>
      <img src={`./coffees/${coffee.image}`} alt={coffee.name} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Details>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </Details>

      <Footer>
        <span>
          R${' '}
          <strong>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </strong>
        </span>
        <div className="actions">
          <Counter id={coffee.id} quantity={quantity ?? 0} />
          <Link to="/checkout" id="cartButton">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Wrapper>
  )
}
