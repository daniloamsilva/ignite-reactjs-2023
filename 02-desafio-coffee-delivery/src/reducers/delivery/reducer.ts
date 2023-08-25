import { DeliveryActions } from './actions'

export enum PaymentMethods {
  CREDIT_CARD = 'creditCard',
  DEBIT_CARD = 'debitCard',
  CASH = 'cash',
}

export enum PaymentMethodsLabels {
  creditCard = 'Cartão de crédito',
  debitCard = 'Cartão de débito',
  cash = 'Dinheiro',
}

export interface DeliveryAddress {
  cep: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export interface InitialState {
  deliveryAddress?: DeliveryAddress
  paymentMethod?: PaymentMethods
}

interface Action {
  type: DeliveryActions
  payload: {
    deliveryAddress?: DeliveryAddress
    paymentMethod?: PaymentMethods
  }
}

export function DeliveryReducer(state: InitialState, action: Action) {
  switch (action.type) {
    case DeliveryActions.SET_DELIVERY_ADDRESS: {
      return { ...state, deliveryAddress: action.payload.deliveryAddress }
    }
    case DeliveryActions.CHANGE_PAYMENT_METHOD: {
      return { ...state, paymentMethod: action.payload.paymentMethod }
    }
    default:
      return state
  }
}
