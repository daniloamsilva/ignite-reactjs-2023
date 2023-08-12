import { Wrapper } from './styles'

interface InfosProps {
  children: React.ReactNode
}

export function Infos({ children }: InfosProps) {
  return <Wrapper>{children}</Wrapper>
}
