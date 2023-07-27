import { Link } from 'react-router-dom'

import { Container } from './styles'

export function ErrorPage() {
  return (
    <Container>
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado aconteceu.</p>
      <Link to={'/'}>Voltar para a página inicial</Link>
    </Container>
  )
}
