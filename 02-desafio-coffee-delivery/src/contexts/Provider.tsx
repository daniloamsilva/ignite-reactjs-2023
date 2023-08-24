import { CartContextProvider } from './CartContext'
import { DeliveryContextProvider } from './DeliveryContext'

interface ContextsProviderProps {
  children: React.ReactNode
}

export function ContextsProvider({ children }: ContextsProviderProps) {
  return (
    <CartContextProvider>
      <DeliveryContextProvider>{children}</DeliveryContextProvider>
    </CartContextProvider>
  )
}
