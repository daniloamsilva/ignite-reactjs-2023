import { createContext, useReducer } from 'react'

import {
  DeliveryAddress,
  DeliveryReducer,
  PaymentMethods,
} from '../reducers/delivery/reducer'
import {
  setDeliveryAddressAction,
  changePaymentMethodAction,
} from '../reducers/delivery/actions'

interface DeliveryContextData {
  deliveryAddress?: DeliveryAddress
  paymentMethod?: PaymentMethods
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
  const [state, dispatch] = useReducer(DeliveryReducer, {})

  function setDeliveryAddress(address: DeliveryAddress) {
    dispatch(setDeliveryAddressAction(address))
  }

  function changePaymentMethod(paymentMethod: PaymentMethods) {
    dispatch(changePaymentMethodAction(paymentMethod))
  }

  const initialValue = {
    deliveryAddress: state.deliveryAddress,
    paymentMethod: state.paymentMethod,
    setDeliveryAddress,
    changePaymentMethod,
  }

  return (
    <DeliveryContext.Provider value={initialValue}>
      {children}
    </DeliveryContext.Provider>
  )
}
