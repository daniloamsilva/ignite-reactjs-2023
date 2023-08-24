import { createContext, useReducer } from 'react'

import {
  DeliveryAddress,
  DeliveryReducer,
  PaymentMethods,
} from '../reducers/delivery/reducer'
import {
  setDeliveryAddressAction,
  setPaymentMethodAction,
} from '../reducers/delivery/actions'

interface DeliveryContextData {
  setDeliveryAddress: (address: DeliveryAddress) => void
  changePaymentMethod: (paymentMethod: PaymentMethods) => void
}

interface DeliveryContextProviderProps {
  children: React.ReactNode
}

export const DeliveryContext = createContext({} as DeliveryContextData)

export function DeliveryContextProvider({
  children,
}: DeliveryContextProviderProps) {
  const [, dispatch] = useReducer(DeliveryReducer, {})

  function setDeliveryAddress(address: DeliveryAddress) {
    dispatch(setDeliveryAddressAction(address))
  }

  function changePaymentMethod(paymentMethod: PaymentMethods) {
    console.log(paymentMethod)
    dispatch(setPaymentMethodAction(paymentMethod))
  }

  const initialValue = {
    setDeliveryAddress,
    changePaymentMethod,
  }

  return (
    <DeliveryContext.Provider value={initialValue}>
      {children}
    </DeliveryContext.Provider>
  )
}
