import { Container } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function Counter() {
  return (
    <Container>
      <button>
        <Minus size={15} />
      </button>
      <span>1</span>
      <button>
        <Plus size={15} />
      </button>
    </Container>
  )
}