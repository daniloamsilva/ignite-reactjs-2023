import { ShoppingCart } from 'phosphor-react'
import { Wrapper, Details, Footer, Tags } from './styles'
import { Counter } from '../../Counter'
import { Link } from 'react-router-dom'
import { Coffee } from '../../../../coffees'

interface CatalogProps {
  coffee: Coffee
}

export function Catalog({ coffee }: CatalogProps) {
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
          <Counter />
          <Link to="/checkout" id="cartButton">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Wrapper>
  )
}
