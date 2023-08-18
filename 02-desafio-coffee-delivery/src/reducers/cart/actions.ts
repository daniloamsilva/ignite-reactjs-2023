export enum CartActions {
  INCREMENT_COFFEE_FROM_CART = 'INCREMENT_COFFEE_FROM_CART',
  DECREMENT_COFFEE_FROM_CART = 'DECREMENT_COFFEE_FROM_CART',
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function incrementCoffeeToCartAction(id: number) {
  return {
    type: CartActions.INCREMENT_COFFEE_FROM_CART,
    payload: { id },
  }
}

export function decrementCoffeeToCartAction(id: number) {
  return {
    type: CartActions.DECREMENT_COFFEE_FROM_CART,
    payload: { id },
  }
}

export function addCoffeeToCartAction(id: number, quantity: number) {
  return {
    type: CartActions.ADD_COFFEE_TO_CART,
    payload: { id, quantity },
  }
}

export function removeCoffeeFromCartAction(id: number) {
  return {
    type: CartActions.REMOVE_COFFEE_FROM_CART,
    payload: { id },
  }
}
