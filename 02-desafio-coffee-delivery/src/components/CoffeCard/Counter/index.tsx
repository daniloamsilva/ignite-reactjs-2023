import { Wrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function Counter() {
  return (
    <Wrapper>
      <button type="button">
        <Minus size={15} />
      </button>
      <span>0</span>
      <button type="button">
        <Plus size={15} />
      </button>
    </Wrapper>
  )
}
