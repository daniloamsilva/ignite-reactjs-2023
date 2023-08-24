import { DeliveryAddress, PaymentMethods } from './reducer'

export enum DeliveryActions {
  SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS',
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
}

export function setDeliveryAddressAction(deliveryAddress: DeliveryAddress) {
  return {
    type: DeliveryActions.SET_DELIVERY_ADDRESS,
    payload: { deliveryAddress },
  }
}

export function setPaymentMethodAction(paymentMethod: PaymentMethods) {
  return {
    type: DeliveryActions.SET_PAYMENT_METHOD,
    payload: { paymentMethod },
  }
}
