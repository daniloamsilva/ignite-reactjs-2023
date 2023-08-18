import { CartActions } from './actions'

export interface CartCoffee {
  id: number
  quantity: number
}

interface Action {
  type: CartActions
  payload: {
    id: number
    quantity?: number
  }
}

export function CartReducer(state: CartCoffee[], action: Action) {
  switch (action.type) {
    case CartActions.INCREMENT_COFFEE_FROM_CART: {
      const coffee = state.find((coffee) => coffee.id === action.payload.id)
      if (coffee) {
        return state.map((coffee) => {
          return coffee.id === action.payload.id
            ? { ...coffee, quantity: coffee.quantity + 1 }
            : coffee
        })
      } else {
        return [...state, { id: action.payload.id, quantity: 1 }]
      }
    }
    case CartActions.DECREMENT_COFFEE_FROM_CART: {
      const coffee = state.find((coffee) => coffee.id === action.payload.id)
      if (coffee) {
        if (coffee.quantity > 1) {
          return state.map((coffee) => {
            return coffee.id === action.payload.id
              ? { ...coffee, quantity: coffee.quantity - 1 }
              : coffee
          })
        } else {
          return state.filter((coffee) => coffee.id !== action.payload.id)
        }
      } else {
        return state
      }
    }
    case CartActions.ADD_COFFEE_TO_CART: {
      const coffee = state.find((coffee) => coffee.id === action.payload.id)

      if (coffee) {
        const newQuantity =
          action.payload.quantity !== undefined
            ? coffee.quantity + action.payload.quantity
            : coffee.quantity

        return state.map((coffee) =>
          coffee.id === action.payload.id
            ? { ...coffee, quantity: newQuantity }
            : coffee,
        )
      } else {
        return [
          ...state,
          { id: action.payload.id, quantity: action.payload.quantity || 1 },
        ]
      }
    }
    case CartActions.REMOVE_COFFEE_FROM_CART: {
      return state.filter((coffee) => coffee.id !== action.payload.id)
    }
    default:
      return state
  }
}
