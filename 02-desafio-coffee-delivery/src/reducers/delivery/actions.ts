import { DeliveryAddress, PaymentMethods } from './reducer'

export enum DeliveryActions {
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
  CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD',
}

export function setDeliveryAddressAction(deliveryAddress: DeliveryAddress) {
  return {
    type: DeliveryActions.SET_DELIVERY_ADDRESS,
    payload: { deliveryAddress },
  }
}

export function changePaymentMethodAction(paymentMethod: PaymentMethods) {
  return {
    type: DeliveryActions.CHANGE_PAYMENT_METHOD,
    payload: { paymentMethod },
  }
}
