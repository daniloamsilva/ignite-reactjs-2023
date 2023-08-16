import { Trash } from 'phosphor-react'

import { Counter } from '../../Counter'
import { Wrapper, Info, Price, RemoveButton } from './styles'

export function Cart() {
  return (
    <Wrapper>
      <Info>
        <img src="./coffees/Americano.png" alt="Americano" />
        <div id="details">
          <span id="name">Expresso Tradicional</span>
          <div id="actions">
            <Counter />
            <RemoveButton type="button">
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </div>
      </Info>
      <Price>R$ 9,90</Price>
    </Wrapper>
  )
}
