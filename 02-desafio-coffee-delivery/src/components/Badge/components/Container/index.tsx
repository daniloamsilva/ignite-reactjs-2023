import { Wrapper } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <Wrapper>{children}</Wrapper>
}
