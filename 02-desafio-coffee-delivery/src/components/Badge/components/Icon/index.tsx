import { Wrapper } from './styles'

interface IconProps {
  color: 'yellow-dark' | 'yellow' | 'black' | 'purple'
  children: React.ReactNode
}

export function Icon({ color, children }: IconProps) {
  return <Wrapper color={color}>{children}</Wrapper>
}
