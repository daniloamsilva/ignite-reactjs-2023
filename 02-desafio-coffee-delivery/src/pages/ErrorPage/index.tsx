import { Link } from 'react-router-dom'

import { Wrapper } from './styles'

export function ErrorPage() {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado aconteceu.</p>
      <Link to={'/'}>Voltar para a página inicial</Link>
    </Wrapper>
  )
}
